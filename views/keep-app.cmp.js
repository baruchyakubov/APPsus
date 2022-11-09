import { noteService } from '../apps/keep/services/keep-app.service.js'
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from '../apps/keep/cmps/note-add.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'
import noteEdit from '../apps/keep/pages/edit.js'

export default {
    template:/*html*/`
    <div class="keep-app flex column align-center">
        <section class="keep-header full flex">
            <h1>keep app</h1>
            <note-add @save="saveNote"/>
        </section>
        <note-list :notes="notes" />
    </div>
    
    `,
    data() {
        return {
            notes: null
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
            console.log('editing', note)
        },
        sendNote(note) {
            console.log('sending', note)
        },
        paintNote(note) {
            console.log('painting', note)
        },
        removeNote(note) {
            console.log('removing', note)
            noteService.remove(note)
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
        noteEdit
    }
}