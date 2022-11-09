import noteFooter from './note-footer.cmp.js'

export default {
    props: ['note'],
    template: /*html*/`
        <section class="note flex align-center justify-center" :class="noteStyle">
            {{note.info.txt}}
            <note-footer :note="note"
            />
            
        </section>
    `,
    computed: {
        noteStyle() {
            return { pinned: this.note.isPinned }
        }
    },
    components: {
        noteFooter
    }
}