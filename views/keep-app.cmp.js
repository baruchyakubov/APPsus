import { noteService } from '../apps/keep/services/keep-app.service.js'

import noteAdd from '../apps/keep/cmps/note-add.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template:/*html*/`
    <h1>keep app</h1>
    <note-add />
    <note-list :notes="notes" />
    
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