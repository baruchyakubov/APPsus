import { noteService } from '../apps/keep/services/keep-app.service.js'

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
            .then(notes => this.notes = notes)
    },
    components: {
        noteAdd,
        noteList
    }
}