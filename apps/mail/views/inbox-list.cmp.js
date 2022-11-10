import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props:['emails'],
    template:`
    <section class="email-list">
        <ul class="clean-list">
            <li class="email-preview" v-for="email in emails" :key="email.id">
            
                <email-preview :email ="email"/>
             
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