import { eventBus } from "../../../services/event-bus.service.js"
import { noteService } from "../services/keep-app.service.js"

import noteAddCmp from "./note-add.cmp.js"

export default {
    props: ['note'],
    template: /*html*/`
    <div class="modal" :class="screenStyle" @submit.prevent="save">
        <form class="note-edit flex column" v-if="note" >
            
        <label for="type">Note type:</label>
            <select id="type" v-model="newNote.type">
                <option value="note-txt">note-txt</option>
                <option value="note-todos">note-todos</option>
                <option value="note-img">note-img</option>
            </select>
            <label for="bgc">Select Color</label>
            
            <select id="bgc" v-model="newNote.style" :style="{ 'background-color': newNote.style }">
                <option value="#5dacbd" style="background-color: #5dacbd;"></option>
                <option value="#ffc93c" style="background-color: #ffc93c;"></option>
                <option value="#155263" style="background-color: #155263;"></option>
                <option value="#ff9a3c" style="background-color: #ff9a3c;"></option>
                <option value="#ff6f3c" style="background-color: #ff6f3c;"></option>
                <option value="#ff894c" style="background-color: #ff894c"></option>
            </select>
            
            <textarea v-if="newNote.type === 'note-txt'" v-model="txt" cols="30" rows="10"></textarea>
            
            <ul v-if="newNote.type === 'note-todos'">
                <h2>Todo:</h2>
                <input type="text" placeholder="Label..." />
                <li v-for="(todo, index) in newNote.info.todos || 1">
                    <input type="text" v-model="todo[index]" />
                </li>
                <button>Add todo</button>
            </ul>
            
            <div v-if="newNote.type === 'note-img'">
                <input type="text" placeholder="Image Title..."/>
                <input type="text" placeholder="Type image url here!"/>
            </div>
            <button v-if="newNote">Save</button>
        </form>
    </div>
    `,
    data() {
        return {
            isScreen: false,
            newNote: noteService.createNewNote(),
            noteInfo: {
                'note-txt': {
                    txt: '',
                },
                'note-todos': {
                    label: '',
                    todos: []
                },
                'note-img': {
                    title: '',
                    url: '',
                }
            }
        }
    },
    watch: {
        note() {
            if (this.note && this.note.length) this.newNote = this.note
            console.log('newNote is now', this.newNote)
            //todo Break the pointer!!
        }
    },
    methods: {
        toggleScreen() {
            this.isScreen = !this.isScreen
        },
        setScreen(screen) {
            this.isScreen = !this.isScreen
        },
        setType() {
            console.log(this.type)
        },
        save() {
            this.newNote.info = this.noteInfo[this.type]
            this.$emit('save', newNote)
        }
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
    },
}