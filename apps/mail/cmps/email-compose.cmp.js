import { gmailService } from "../services/gmail-app.service.js"

export default{
    template:`
    <form class="composed-form flex">
        <header class="form-header">
            <button @click="hideComposed">X</button>
        </header>
        <input v-model="to" type="text" placeholder="To" />
        <input v-model="subject" type="text" placeholder="Subject" />
        <textarea v-model="body" name="" id="" cols="30" rows="10"></textarea>
        <button @click.prevent="sendMessage">send</button>
    </form>
    `,
    data(){
        return {
            username:'',
            to: '',
            subject:'',
            body:''

        }
    },
    created(){
        gmailService.getUser()
            .then(username => {
                this.username = username
            })
    },
    methods:{
        sendMessage(){
            if(this.to === '') return
            gmailService.sendEmail(this.to , this.subject , this.body)
                 .then(this.$emit('hideComposed'))
        },
        hideComposed(){
            this.$emit('hideComposed')
        }
    }
}