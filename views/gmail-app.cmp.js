import { gmailService } from '../apps/mail/services/gmail-app.service.js'
import { eventBus } from '../services/event-bus.service.js'

import emailList from '../apps/mail/views/inbox-list.cmp.js'

import emailFolderList from '../apps/mail/cmps/email-folder-list.cmp.js'

export default {
    template: `
    <h1>gmail app</h1>
    <email-folder-list/>
    <email-list v-if="emails" :emails="emails" />
    `,
    data() {
        return {
            emails: null,
            gFilterBy: {
                txt: '',
                isRead: true,
            }
        }

    },
    created() {
        gmailService.query()
            .then(list => {
                this.emails = list
            })
        eventBus.on('changeReadState', this.changeReadState)
    },
    components: {
        emailFolderList,
        emailList,
    },
    methods: {
        changeReadState(book) {
            if (!book.isRead) book.isRead = !book.isRead
            gmailService.save(book)
        }
    },
    computed:{
        emailsToShow(){
            const regex = new RegExp(this.filterBy.txt, 'i')
            var emails = this.emails.filter(email => regex.test(email.fullname))
            emails = emails.filter(email => email.isRead > this.filterBy.isRead)
            return emails
        } 
    }
}