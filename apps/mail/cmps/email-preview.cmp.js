export default{
    props:['email'],
    template:`
    <section class="email-preview flex justify-around align-center">
        <p>{{ email.fullname }}</p>
        <p>{{ email.subject }} - {{ email.body }}</p>
        <p>{{ email.sentAt }}</p>
    </section>
        
    `
}