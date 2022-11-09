import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['note'],
    template: /*html*/`
    <div class="note-options full flex justify-between">
        <img src="../../../assets/images/pin.png" @click="pin" alt="" />
        <img src="../../../assets/images/edit.png" @click="edit" alt="" />
        <img src="../../../assets/images/mail.png" @click="send" alt="" />
        <img src="../../../assets/images/paint.png" @click="paint" alt="" />
        <img src="../../../assets/images/delete.png" @click="remove" alt="" />
    </div>
        `,
    created() {
    },
    methods: {
        pin() {
            eventBus.emit('pinNote', this.note)
        },
        edit(note) {
            eventBus.emit('editNote', this.note)
        },
        send(note) {
            eventBus.emit('sendNote', this.note)
        },
        paint(note) {
            eventBus.emit('paintNote', this.note)
        },
        remove(note) {
            eventBus.emit('removeNote', this.note)
        },
    }
}
