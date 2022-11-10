
export default{
    props:['criteria'],
    template:`
    <section class="folder-list">
        <button @click="setStatusInbox">Inbox</button>
        <button @click="setStatusSent">Sent</button>
        <button @click="setStatusTrash">trash</button>
        <button @click="showComposed">Composed</button>
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
        showComposed(){
            this.$emit('showComposed') 
        }
    }
}