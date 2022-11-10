// import { noteService } from '../services/keep-app.service.js'

import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: /*html*/`
        <main class="note-list-container full">
            <div class="note-list grid"
            v-if="notes">
                <note-preview v-for="note in notes"
                 :note ="note"
                 @noteAction="noteAction($event)"/>
            </div>
        </main>
    `,
    methods: {
        noteAction(action) {
            this.$emit('noteAction', action)

        },
    },
    components: {
        notePreview
    },

}