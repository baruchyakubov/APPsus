import { noteService } from '../services/keep-app.service.js'

import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: /*html*/`
        <main class="note-list-container full">
            <div class="note-list grid"
            v-if="notes">
                <note-preview v-for="note in notes"
                 :note ="note"/>
            </div>
        </main>
    `,
    methods: {
        // pinNote(note) {
        //     note.isPinned = !note.isPinned
        //     debugger
        //     // const idx = this.notes.indexOf(note)
        //     // this.notes.sort((a, b) => { return a === note ? -1 : b === note ? 1 : 0; })
        //     noteService.save(note)
        //     this.getNotes()

        // },
        // removeNote(note) {
        //     console.log(note);
        //     noteService.remove(note.id)
        //     this.getNotes()
        // },
        // getNotes() {
        //     noteService.query()
        //         .then(notes => {
        //             this.notes = notes
        //             console.log(this.notes)
        //         })

        // },
    },
    components: {
        notePreview
    },

}