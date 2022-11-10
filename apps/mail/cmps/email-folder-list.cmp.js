
export default{
    props:['criteria'],
    template:`
    <section>
        <button @click="setStatusInbox">Inbox</button>
        <button @click="setStatusSent">Sent</button>
        <button>trash</button>
        <router-link to="/gmail-app"><button>Composed</button></router-link>
    </section>
    `,
    methods:{
        setStatusSent(){
            this.criteria.status = 'sent'
            this.$emit('setCriteria' , this.criteria)
        },
        setStatusInbox(){
            this.criteria.status = 'inbox'
            this.$emit('setCriteria' , this.criteria)
        }
    }
}