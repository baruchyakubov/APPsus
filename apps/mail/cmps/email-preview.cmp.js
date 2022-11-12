import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['email'],
    template: `       
            <p>{{ email.fullname }}</p>
            <p class="body-preview">{{ limitChar }}</p>
            <p class="date-preview">{{ setDate }}</p>
            <button class="delete" @click.stop="setStatus"><img src="assets/images/delete.png" alt="" /></button>
            <button @click.stop="sendAsNote">Keep as note</button>
    `,
    computed: {
        setColor() {
            return { white: !this.email.isRead, grey: this.email.isRead }
        },
        setDate() {
            return new Date(this.email.sentAt).toLocaleDateString()
        },
        limitChar() {
            var str = this.email.subject + '-' + this.email.body
            if (str.length > 70) str = str.substring(0, 70) + '...'
            return str
        }
    },
    methods: {
        setStatus() {
            if (this.email.status === 'trash') {
                eventBus.emit('deleteEmail', this.email.id)
                return
            }
            this.email.status = 'trash'
            eventBus.emit('saveEmailStatus', this.email)
        },
        sendAsNote() {
            this.$router.push('/keep-app')
            eventBus.emit('convertMail', { name: this.email.fullname, title: this.email.subject, txt: this.email.body })

        }
    }
}