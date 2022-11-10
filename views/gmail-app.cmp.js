import { gmailService } from '../apps/mail/services/gmail-app.service.js'
import { eventBus } from '../services/event-bus.service.js'

import emailList from '../apps/mail/views/inbox-list.cmp.js'

import emailFolderList from '../apps/mail/cmps/email-folder-list.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'
import emailComposed from '../apps/mail/cmps/email-compose.cmp.js'


export default {
    template: `
    <section class="gmail-app main-layout ">
    <section class="filter-container flex">
       <h1>gmail app</h1>
       <email-filter v-if="criteria" :criteria="criteria" @setCriteria="setCriteria" />
       <email-folder-list v-if="criteria" :criteria="criteria" @setCriteria="setCriteria" @showComposed = "showComposed"/>
    </section>
   
    <email-list v-if="emails" :emails="emailsToShow" />
    <email-composed v-if="isComposed" @hideComposed="hideComposed"/>
    </section>
   
    `,
    data() {
        return {
            emails: null,
            criteria: {},
            isComposed:false
        }

    },
    created() {
        gmailService.query()
            .then(list => {
                this.emails = list
            })

            gmailService.queryCriteria()
                .then(criteria => {this.criteria = criteria})

        eventBus.on('changeReadState', this.changeReadState)
        eventBus.on('saveEmailStatus', this.setEmailStatus)
        eventBus.on('deleteEmail', this.deleteEmail)
    },
    components: {
        emailFilter,
        emailFolderList,
        emailList,
        emailComposed
    },
    methods: {
        changeReadState(book) {
            if (!book.isRead) book.isRead = !book.isRead
            gmailService.save(book)
        },
        setCriteria(updatedCriteria){
            gmailService.saveCriteria(updatedCriteria)
                .then(criteria => {
                    this.criteria === criteria
                })
        },
        setEmailStatus(updatedEmailStatus){
            gmailService.save(updatedEmailStatus)
                 .then(this.emailsToShow)
        },
        deleteEmail(emailId){
            gmailService.remove(emailId)
                  .then(this.emailsToShow)
        },
        showComposed(){
            this.isComposed = true
        },
        hideComposed(){
            this.isComposed = false
        }
    },
    computed:{
        Criteria(){
            return this.criteria
        },
        emailsToShow(){
            const regex = new RegExp(this.criteria.txt, 'i')
            var emails = this.emails.filter(email => regex.test(email.fullname)
            && email.status === this.criteria.status)
            // emails = emails.filter(email => email.isRead > this.filterBy.isRead)
            return emails
        } 
    },
    watch:{
        Criteria(){
            this.emailsToShow
        }
    }
}