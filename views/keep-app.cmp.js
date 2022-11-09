import { noteService } from '../services/keep-app.service.js'

export default {
    template:/*html*/`
    <h1>keep app</h1>
    `,
    created() {
        console.log(noteService.query().then(console.log))
        console.log('aaaa')
    }
}