// import noteFooter from './note-footer.cmp.js'

export default {
    props: ['note'],
    template: /*html*/`
            <section class="note flex align-center justify-center" 
            :style="{ 'background-color': note.style }">
            <img class="pin" :class="isPinned" src="../../../assets/images/pin.png" alt="">            
            {{note.info.txt}}

            <div class="note-actions full flex justify-between">
            <img src="../../../assets/images/pin.png" @click="$emit('noteAction', {action:'pin', note})" alt="" />
            <img src="../../../assets/images/edit.png" @click="$emit('noteAction', {action:'edit', note})" alt="" />
            <img src="../../../assets/images/mail.png" @click="$emit('noteAction', {action: 'mail', note})" alt="" />
            <img src="../../../assets/images/delete.png" @click="$emit('noteAction', {action:'remove', note})" alt="" />
        </div>
            
        </section>
    `,
    // methods: {
    //     onAction() {

    //         this.$emit('noteAction', "{ action: 'edit', note: this.note }")
    //     },
    // },
    computed: {
        isPinned() {
            return { hidden: !this.note.isPinned }
        }
    },
}