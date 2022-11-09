import { utilService } from "../../../services/util.service.js"

export default {
    template: /*html*/`
    <div class="note-add flex">
    <form @submit.prevent="save">
        <input type="text" v-model="txt" placeholder="add a new note!"/>
        <button>Save</button>    
    </form>
    </div>
    `,
    data() {
        return {
            txt: null
        }
    },
    methods: {
        save() {
            if (!this.txt) return
            const note = {
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: this.txt
                }
            }
            this.$emit('save', note)
        }
    }
}