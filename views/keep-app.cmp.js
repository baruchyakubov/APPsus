import { noteService } from '../apps/keep/services/keep-app.service.js'
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from '../apps/keep/cmps/note-add.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'
import noteEdit from '../apps/keep/cmps/note-edit.cmp.js'

export default {
    template:/*html*/`
    <div class="keep-app flex column align-center">
        <section class="keep-header full flex">
            <h1>keep app</h1>
            <note-add @save="saveNote"/>
            <h1 class="add-link" @click="editNote">Add a new note....</h1>
        </section>
        <note-list :notes="notes" />
        <note-edit :note="selectedNote" />
    </div>
    
    `,
    data() {
        return {
            notes: null,
            selectedNote: null,
        }
    },
    created() {
        this.getNotes()
        eventBus.on('pinNote', this.pinNote)
        eventBus.on('editNote', this.editNote)
        eventBus.on('sendNote', this.sendNote)
        eventBus.on('paintNote', this.paintNote)
        eventBus.on('removeNote', this.removeNote)
    },
    methods: {
        saveNote(note) {
            noteService.save(note)
                .then(res => this.getNotes())
        },
        pinNote(note) {
            note.isPinned = !note.isPinned
            this.saveNote(note)
        },
        editNote(note) {
            this.selectedNote = note
            eventBus.emit('toggleScreen')
        },
        sendNote(note) {
            console.log('sending', note)
        },
        paintNote(note) {
            console.log('painting', note)
        },
        removeNote(note) {
            console.log('removing', note)
            noteService.remove(note.id)
                .then(res => this.getNotes())
        },
        getNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes.sort((a, b) => a.isPinned ? -1 : b.isPinned ? 1 : 0)
                    console.log(this.notes)
                })
        },
    },
    components: {
        noteAdd,
        noteList,
        noteEdit,
    }
}