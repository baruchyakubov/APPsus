import { gmailService } from '/apps/mail/services/gmail-app.service.js'

export default{
    template:`
    <section v-if="email" class="email-details">
    <h1>{{ email.subject }}</h1>
    <h3>{{ setDate }}</h3>
    <h3>[{{ email.fullname }}] <span><{{ email.from }}></span> </h3>
    <p>{{ email.body }}</p>
    <pre>
Thankes,
{{ email.fullname }}
    </pre>
    <router-link to='/gmail-app/inbox'><button>return</button></router-link>
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
            .then(email => this.email = email)
    },
    computed:{
        setDate(){
          return new Date(this.email.sentAt).toLocaleDateString()
        }
    }
}