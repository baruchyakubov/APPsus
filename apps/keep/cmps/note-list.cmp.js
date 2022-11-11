import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: /*html*/`
        <main class="note-list-container full" v-if="notes">
            <div class="note-list">
                <note-preview v-for="note in pinnedList"
                :note ="note"
                @noteAction="noteAction($event)"/>
            </div>
            
            <div class="note-list">
                <note-preview v-for="note in unPinnedList"
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
    computed: {
        pinnedList() {
            return this.notes.filter(note => note.isPinned)
        },
        unPinnedList() {
            return this.notes.filter(note => !note.isPinned)
        },
    },
    components: {
        notePreview
    },

}