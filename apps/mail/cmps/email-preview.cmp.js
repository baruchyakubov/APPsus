import { eventBus } from "../../../services/event-bus.service.js"

export default{
    props:['email'],
    template:`
    <section @click="changeReadState" :class="setColor" class="email-preview flex justify-around align-center">
    <router-link :to="'/gmail-app/' + email.id">
        <p class="fullname">{{ email.fullname }}</p>
        <p>{{ email.subject }} - {{ email.body }}</p>
        <p>{{ setDate }}</p>
        </router-link> 
        <button @click.stop="setStatus">DELETE</button>
    </section>   
    `,
    computed:{
        setColor(){
            return {white:!this.email.isRead , grey:this.email.isRead}
        },
        setDate(){
          return new Date(this.email.sentAt).toLocaleDateString()
        }
    },
    methods:{
        changeReadState(){

            this.email.isRead = !this.email.isRead
            eventBus.emit('changeReadState' , this.email)
        },
        setStatus(){
            if(this.email.status === 'trash'){
                eventBus.emit('deleteEmail' , this.email.id)
                return 
            }
            this.email.status = 'trash'
            eventBus.emit('saveEmailStatus' , this.email)
        }
    }
}