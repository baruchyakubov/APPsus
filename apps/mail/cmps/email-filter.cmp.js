export default {
    props: ['criteria'],
    template: `
    <section  class="filter-container">
        <input class="search" v-model="inputSearch" @input="setSearch" type="search" placeholder="Search" />
        <!-- <select class="sort-by">
            <option value="">sort by</option>
            <option value="name">title</option>
            <option value="last-login">date</option>
        </select> -->
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