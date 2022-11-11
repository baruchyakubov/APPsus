import { gmailService } from "../services/gmail-app.service.js"

export default{
    template:`
    <form class="composed-form flex">
        <header class="form-header">
            <router-link to="/gmail-App"><button>X</button></router-link>
        </header>
        <input class="to" v-model="to" type="text" placeholder="To" />
        <input class="subject" v-model="subject" type="text" placeholder="Subject" />
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
                 .then(this.$router.push('/gmail-App'))
        },
        // hideComposed(){
        //     this.$emit('hideComposed')
        // }
    }
}