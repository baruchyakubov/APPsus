export default {
    props:['emails'],
    template:`
    <h1>list</h1>
    <section class="email-list">
        <ul>
            <li v-for="email in emails">{{ email }}</li>
        </ul>
    </section>
    `,
    created(){
        console.log(this.emails);
    }
}