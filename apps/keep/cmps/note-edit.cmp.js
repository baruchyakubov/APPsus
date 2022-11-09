import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['note'],
    template: /*html*/`
    <div class="modal" :class="screenStyle">
        <form class="note-edit" v-if="note" >
        <label for="type">Note type:</label>
        <select id="type" v-model="type">
            <option value="note-text">text</option>
            <option value="note-todos">todo</option>
            <option value="note-img">image</option>
            <option value="note-yt">youtube</option>
        </select>
        <textarea v-if="note.type === note-text" v-model="txt" cols="30" rows="10"></textarea>
        <ul v-if="note.type === note-todos">
            <h2>Todo:</h2>
            <li v-for="(todo, index) in note.info.todos">
                <input type="text" v-model="todo[index]" />
            </li>
            <button>Add todo</button>
        </ul>
        <input v-if="note.type === note-img" type="text" id="img" placeholder="Type image url here!"/>
        <button v-if="note">Save</button>
        </form>
    </div>
    `,
    data() {
        return {
            isScreen: false,
            type: null,
            txt: '',
            todos: null,
        }
    },
    created() {
        eventBus.on('toggleScreen', this.setScreen)
    },
    methods: {
        toggleScreen() {
            this.isScreen = !this.isScreen
        },
        setScreen(screen) {
            this.isScreen = !this.isScreen
        },
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
    },
}