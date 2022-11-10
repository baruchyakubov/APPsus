export default {
    props: ['criteria'],
    template: `
    <section  class="filter-container">
        <input v-model="inputSearch" @input="setSearch" type="search" placeholder="Search" />
        <label>
                <select v-model="readUnread" @change="setIsRead">  
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
        </label>  
    </section>
    `,
    data() {
        return{
            inputSearch: '',
            readUnread: null
       }
    },
    methods: {
        setSearch() {
            this.criteria.txt = this.inputSearch 
            this.$emit('setCriteria' , this.criteria)
        },
        setIsRead(){
            
        }
    }
}