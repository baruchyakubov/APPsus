import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['note'],
    template: /*html*/`
    <div class="note-options full flex justify-between">
        <img src="../../../assets/images/pin.png" @click="pin" alt="" />

        <router-link :to="'keep-app/' +note.id">
        <img src="../../../assets/images/edit.png" @click="edit" alt="" />
        </router-link>

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
        edit() {
            eventBus.emit('editNote', this.note)
        },
        send() {
            eventBus.emit('sendNote', this.note)
        },
        paint() {
            eventBus.emit('paintNote', this.note)
        },
        remove() {
            eventBus.emit('removeNote', this.note)
        },
    }
}
