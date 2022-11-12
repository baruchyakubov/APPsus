import { gmailService } from '../apps/mail/services/gmail-app.service.js'
import { eventBus } from '../services/event-bus.service.js'

import emailList from '../apps/mail/views/inbox-list.cmp.js'

import emailFolderList from '../apps/mail/cmps/email-folder-list.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'



export default {
    template: `
    <section class="gmail-app main-layout ">
    <section class="filter-container flex">
       <h1>GmailApp<span class="point">.<span></h1>
       <email-filter v-if="criteria" :criteria="criteria" @setCriteria="setCriteria" />
       <email-folder-list v-if="criteria" :criteria="criteria" @setCriteria="setCriteria" @showComposed = "showComposed"/>
    </section>
   
    <email-list @changeReadState="changeReadState" @hideList="hideList" v-if="emails && !isSelectedEmail" :emails="emailsToShow" />
    <router-view></router-view>
    </section>
   
    `,
    data() {
        return {
            emails: null,
            criteria: {},
            isSelectedEmail:false
        }

    },
    created() {
        gmailService.query()
            .then(list => {
                this.emails = list
            })

            gmailService.queryCriteria()
                .then(criteria => {this.criteria = criteria})

        eventBus.on('saveEmailStatus', this.setEmailStatus)
        eventBus.on('deleteEmail', this.deleteEmail)
        eventBus.on('showList' , this.showList)
    },
    components: {
        emailFilter,
        emailFolderList,
        emailList,
    },
    methods: {
        changeReadState(book) {
            if (!book.isRead) book.isRead = !book.isRead
            gmailService.save(book)
        },
        setCriteria(updatedCriteria){
            if(this.isSelectedEmail){
                this.$router.push('/gmail-app')
                this.isSelectedEmail = false
            } 
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
        },
        hideList(){
            this.isSelectedEmail = true
        },
        showList(){
            this.isSelectedEmail = false
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
            return emails
        } 
    },
    watch:{
        Criteria(){
            this.emailsToShow
        }
    }
}