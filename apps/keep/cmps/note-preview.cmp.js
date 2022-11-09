import noteFooter from './note-footer.cmp.js'

export default {
    props: ['note'],
    template: /*html*/`
        <section class="note flex align-center justify-center">
            {{note.info.txt}}
            <note-footer :note="note"
            />
            
        </section>
    `,
    // methods: {
    //     edit() {
    //         console.log('edit')
    //     },
    //     paint() {
    //         console.log('paint')
    //     },
    //     send() {
    //         console.log('send')
    //     },
    // },
    components: {
        noteFooter
    }
}