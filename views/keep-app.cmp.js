import { noteService } from '../services/keep-app.service.js'


{/* <note-add />
<note-list /> */}
export default {
    template:/*html*/`
    <h1>keep app</h1>

    `,
    data() {
        return {
            notes: null
        }
    },
    created() {
        this.notes = noteService.query()
    },
}