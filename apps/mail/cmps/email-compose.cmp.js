import { gmailService } from "../services/gmail-app.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

export default{
    template:`
    <form class="composed-form flex">
        <header class="form-header">
            <router-link to="/gmail-App"><button>X</button></router-link>
        </header>
        <input class="to" v-model="to" type="text" placeholder="To" />
        <input class="subject" v-model="subject" type="text" placeholder="Subject" />
        <textarea  v-model="body" name="" id="" cols="30" rows="10"></textarea>
        <button @click.prevent="sendMessage">send</button>
    </form>
    `,
    data(){
        return {
            username:'',
            to: '',
            subject:'',
            body:'',
        }
    },
    created(){
        gmailService.getUser()
            .then(username => {
                this.username = username
            })
            eventBus.on('mailNote' , this.sendNote)
            
    },
    methods:{
      
        sendMessage(){
            if(this.to === '') return
            gmailService.sendEmail(this.to , this.subject , this.body)
                 .then(this.$router.push('/gmail-App'))
        },
        sendNote(note){
            // console.log(note.info.txt);
           this.body = note.info.txt
           console.log(this.body)
        //    document.querySelector('.body-txt').innerText = note.info.txt
        }
        // hideComposed(){
        //     this.$emit('hideComposed')
        // }
    },
    watch:{
        body(){
            console.log(this.body) 
        },
    }
}