import { gmailService } from '../services/gmail-app.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default{
    template:`
    <section class="details-container">
    <section v-if="email" class="email-details main-layout">
    <h1>{{ email.subject }}</h1>
    <h3>{{ setDate }}</h3>
    <h3>[{{ email.fullname }}] <span><{{ email.from }}></span> </h3>
    <p>{{ email.body }}</p>
    <pre>
Thankes,
{{ email.fullname }}
    </pre>
    <button @click="showList">return</button>
    </section>
    </section>
    
    
    `,
    data(){
      return {
        email: null
      }  
    },
    created(){
        const id = this.$route.params.id
        gmailService.get(id)
            .then(email => {this.email = email
              console.log(this.email.note);
              if(this.email.note !== '') this.isNote = true
            })
    },
    computed:{
        setDate(){
          return new Date(this.email.sentAt).toLocaleDateString()
        }
    },
    methods:{
      showList(){
        eventBus.emit('showList')
        this.$router.push('/gmail-app')
        
      }
    }
}