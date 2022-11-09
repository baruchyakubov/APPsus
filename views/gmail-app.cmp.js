import { gmailService } from '../apps/mail/services/gmail-app.service.js'
import { eventBus } from '../services/event-bus.service.js'

import  inboxList  from '../apps/mail/views/inbox-list.cmp.js'

import emailFolderList from '../apps/mail/cmps/email-folder-list.cmp.js'

export default{
    template:`
    <h1>gmail app</h1>
    <email-folder-list/>
    <router-view v-if="emails" :emails="emails" />
    `,
    data(){
        return {
            emails: null
        }
       
    },
    created() {
        gmailService.query()
            .then(list => {
                this.emails = list
            })
            eventBus.on('changeReadState' , this.changeReadState)
            
    },
    components:{
        inboxList,
        emailFolderList
    },
    methods:{
        changeReadState(book){
            if(!book.isRead) book.isRead = !book.isRead
            gmailService.save(book)
        } 
    }
}