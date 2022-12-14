import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props:['emails'],
    template:`
    <section class="email-list">
        <ul class="clean-list preview-list">
            <li  @click="changeReadState(email)" :class="{white:!email.isRead , grey:email.isRead}" @click="openEmail(email.id)" class="email-preview" v-for="email in emails" :key="email.id">
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
    },
    methods:{
        openEmail(emailId){
            this.$emit('hideList')
            this.$router.push(`/gmail-app/${emailId}`)
        },
        changeReadState(email){
            email.isRead = !email.isRead
            this.$emit('changeReadState' , email)
        }
    }
}