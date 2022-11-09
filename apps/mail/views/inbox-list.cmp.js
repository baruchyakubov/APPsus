import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props:['emails'],
    template:`
    <section class="email-list">
        <ul class="clean-list">
            <li class="email-preview" v-for="email in emails">
            <router-link :to="'/gmail-app/' + email.id">
                <email-preview :email ="email"/>
            </router-link>   
            </li>
        </ul>
    </section>
    `,
    created(){
       console.log(this.emails);
    },
    components:{
        emailPreview
    }
}