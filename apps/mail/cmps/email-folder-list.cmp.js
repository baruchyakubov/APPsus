
export default{
    props:['criteria'],
    template:`
    <section class="folder-list">
        <button @click="setStatusInbox">Inbox</button>
        <button @click="setStatusSent">Sent</button>
        <button @click="setStatusTrash">trash</button>
        <router-link to="/gmail-app/compose"><button>Compose</button></router-link>
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
        },
        setStatusTrash(){
           this.criteria.status = 'trash'
            this.$emit('setCriteria' , this.criteria) 
        },
    }
}