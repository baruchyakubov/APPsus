import { gmailService } from '../apps/mail/services/gmail-app.service.js'

import  inboxList  from '../apps/mail/views/inbox-list.cmp.js'

export default{
    template:`
    <h1>gmail app</h1>
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
    },
    components:{
        inboxList
    }
}