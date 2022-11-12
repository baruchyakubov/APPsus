export default {
    props: ['criteria'],
    template: `
    <section  class="filter-container">
        <input class="search" v-model="inputSearch" @input="setSearch" type="search" placeholder="Search" />
    </section>
    `,
    data() {
        return{
            inputSearch: '',
       }
    },
    methods: {
        setSearch() {
            this.criteria.txt = this.inputSearch 
            this.$emit('setCriteria' , this.criteria)
        },
    }
}