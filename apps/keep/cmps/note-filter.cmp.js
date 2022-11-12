export default {
    template: /*html*/`
            <div class="input-box filter">
                <input type="text" v-model="filter.txt" @input="$emit('filter', filter)" required />
                <span>Search</span>
                <section class="type-filter flex">
                    <img class="icon" src="./assets/images/list.png" title="Todo-list"  alt="" @click="toggleType('note-todos')"  :class="toggled('note-todos')"/>
                    <img class="icon" src="./assets/images/image.png" title="Add an image"  alt="" @click="toggleType('note-img')" :class="toggled('note-img')"/>
                    <img class="icon" src="./assets/images/text.png" title="Text"  alt="" @click="toggleType('note-txt')" :class="toggled('note-txt')"/>
                </section>
            </div>
    `,
    data() {
        return {
            filter: {
                txt: '',
                typesToShow: []
            },
        }
    },
    methods: {
        toggleType(type) {
            let types = this.filter.typesToShow
            if (types.includes(type)) {
                types = types.filter(el => el !== type)
            }
            else {
                types = [...types, type]
            }
            this.filter.typesToShow = types
            this.$emit('filter', this.filter)
        },
        toggled(icon) {
            return { toggled: this.filter.typesToShow.find(type => type === icon) }
        },
    },
}