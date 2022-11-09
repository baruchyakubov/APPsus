import { gmailService } from '../services/gmail-app.service.js'

import  emailList  from '../cmps/email-list.cmp.js'

export default{
    template:`
    <h1>gmail app</h1>
    <email-list v-if="emails" :emails="emails" />
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
        emailList
    }
}