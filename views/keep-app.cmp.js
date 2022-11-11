import { noteService } from '../apps/keep/services/keep-app.service.js'
import { eventBus } from "../../../services/event-bus.service.js"

import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'
import noteEdit from '../apps/keep/cmps/note-edit.cmp.js'

export default {
    template:/*html*/`
    <div class="main-screen" @click="toggleScreen" v-bind:class="screenStyle"></div>
    <div class="keep-app flex column align-center">
        <section class="keep-header full flex column">
            <div class="keep-upper-header flex justify-between align-center">
                <h1>Fort Keep</h1>
                
                <button class="add-link" @click="AddNote">Add a new note....</button>
            </div>
            <note-filter @filter="setFilter($event)" />
        </section>
        <note-list :notes="notes" @noteAction="actionController($event)"/>
        <note-edit @save="saveNote" :note="selectedNote" :isScreen="isScreen"/>
    </div>
    
    `,
    data() {
        return {
            isScreen: false,
            notes: null,
            selectedNote: null,
            filterBy: null,
            eventMap: {
                pin: this.pin,
                edit: this.edit,
                mail: this.mail,
                remove: this.remove,
                copy: this.copy
            },
            filterMap: {
                'note-txt': this.filterTxtNote,
                'note-todos': this.filterTodosNote,
                'note-img': this.filterImgNote,
            }
        }
    },
    created() {
        this.getNotes()
    },
    methods: {
        actionController({ action, note }) {
            this.eventMap[action](note)
        },
        toggleScreen() {
            // shutting off modal also resets selectedNote
            this.isScreen = !this.isScreen
            if (!this.isScreen) this.selectedNote = null
        },
        saveNote(note) {
            this.isScreen = false
            noteService.save(note)
                .then(res => this.getNotes())
            //todo send eventbus message
        },
        pin(note) {
            note.isPinned = !note.isPinned
            this.saveNote(note)
        },
        AddNote() {
            this.selectedNote = null
            this.toggleScreen()
        },
        edit(note) {
            this.selectedNote = note
            this.toggleScreen()
        },
        mail(note) {
            console.log('sending', note)
            eventBus.emit('mailNote', note)
            this.$router.push('/gmail-app/compose')
        },
        remove(note) {
            noteService.remove(note.id)
                .then(res => this.getNotes())
        },
        copy(note) {
            note.id = null
            this.saveNote(note)
        },
        getNotes() {
            noteService.query()
                .then(notes => {
                    if (this.filterBy)
                        notes = notes.filter(note => this.filterNote(note))
                    this.notes = notes
                    // .sort((a, b) => a.isPinned ? -1 : b.isPinned ? 1 : 0)
                })
        },
        setFilter(filter) {
            // if no typesToShow are chosen, show all types
            this.filterBy = filter
            if (!this.filterBy.typesToShow.length)
                this.filterBy.typesToShow = Object.keys(this.filterMap)
            console.log(this.filterBy);
            this.getNotes()
        },
        filterNote(note) {
            if (!this.filterBy.typesToShow.find(type => type === note.type)) return
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.filterMap[note.type](note.info, regex)
        },
        filterTxtNote(info, regex) {
            return regex.test(info.txt)
        },
        filterTodosNote(info, regex) {
            if (regex.test(info.label)) return true
            for (const todo in info.todos) {
                if (regex.test(todo)) return true
            }
        },
        filterImgNote() {
            return true
        },
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
    },
    components: {
        noteList,
        noteEdit,
        noteFilter
    }
}