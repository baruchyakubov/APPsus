// import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['note'],
    template: /*html*/`
    <div class="note-options full flex justify-between">
        <img src="../../../assets/images/pin.png" @click="$emit('noteAction', 'pin')" alt="" />
        <img src="../../../assets/images/edit.png" @click="$emit('noteAction', 'edit')" alt="" />
        <img src="../../../assets/images/mail.png" @click="$emit('noteAction', 'mail')" alt="" />
        <img src="../../../assets/images/delete.png" @click="$emit('noteAction', 'remove')" alt="" />
    </div>
        `,
    data() {
        return {
            action: null,
        }
    },
    // methods: {
    //     pin() {
    //         eventBus.emit('pinNote', this.note)
    //     },
    //     edit() {
    //         eventBus.emit('editNote', this.note)
    //     },
    //     send() {
    //         eventBus.emit('sendNote', this.note)
    //     },
    //     remove() {
    //         eventBus.emit('removeNote', this.note)
    //     },
    // }
}
