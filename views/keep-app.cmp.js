import { noteService } from '../apps/keep/services/keep-app.service.js'
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from '../apps/keep/cmps/note-add.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'
import noteEdit from '../apps/keep/cmps/note-edit.cmp.js'

export default {
    template:/*html*/`
    <div class="main-screen" @click="toggleScreen" v-bind:class="screenStyle"></div>
    <div class="keep-app flex column align-center">
        <section class="keep-header full flex">
            <h1>keep app</h1>
            <note-add @save="saveNote"/>
            <h1 class="add-link" @click="AddNote">Add a new note....</h1>
        </section>
        <note-list :notes="notes" v-model="res" @noteAction="actionController($event)"/>
        <note-edit @save="saveNote" :note="selectedNote" :isScreen="isScreen"/>
    </div>
    
    `,
    data() {
        return {
            isScreen: false,
            notes: null,
            selectedNote: null,
            res: null,
            eventMap: {
                pin: this.pin,
                edit: this.edit,
                mail: this.mail,
                remove: this.remove
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
        },
        remove(note) {
            noteService.remove(note.id)
                .then(res => this.getNotes())
        },
        getNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes.sort((a, b) => a.isPinned ? -1 : b.isPinned ? 1 : 0)
                })
        },
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
    },
    components: {
        noteAdd,
        noteList,
        noteEdit,
    }
}