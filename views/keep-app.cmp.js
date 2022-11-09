import { noteService } from '../apps/keep/services/keep-app.service.js'
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from '../apps/keep/cmps/note-add.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template:/*html*/`
    <div class="keep-app flex column align-center">
        <section class="keep-header full flex justify-between">
            <h1>keep app</h1>
            <note-add />
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
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log(this.notes)
            })
        eventBus.on('pinNote', this.pinNote)
        eventBus.on('editNote', this.editNote)
        eventBus.on('sendNote', this.sendNote)
        eventBus.on('paintNote', this.paintNote)
        eventBus.on('removeNote', this.removeNote)
    },
    methods: {
        pinNote(note) {
            console.log('pinning', note)
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
        },
    },
    components: {
        noteAdd,
        noteList
    }
}