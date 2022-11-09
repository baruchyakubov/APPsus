export default{
    props:['email'],
    template:`
    <section :class="setColor" class="email-preview flex justify-around align-center">
        <p>{{ email.fullname }}</p>
        <p>{{ email.subject }} - {{ email.body }}</p>
        <p>{{ setDate }}</p>
    </section>   
    `,
    computed:{
        setColor(){
            return {white:!this.email.isRead , grey:this.email.isRead}
        },
        setDate(){
          return new Date(this.email.sentAt).toLocaleDateString()
        }
    }
}