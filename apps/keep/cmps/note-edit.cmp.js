import { eventBus } from "../../../services/event-bus.service.js"
import { noteService } from "../services/keep-app.service.js"

import noteAddCmp from "./note-add.cmp.js"

export default {
    props: ['note', 'isScreen'],
    template: /*html*/`
    <div class="modal" :class="screenStyle" :style="{ 'background-color': newNote.style }" @submit.prevent="save">
        <div class="note-options types full flex column">
            <section class="flex">
                <img src="../../../assets/images/pin.png" title="Pin this note"  alt="" @click="newNote.isPinned = !newNote.isPinned"/>
                <img src="../../../assets/images/list.png" title="Todo-list"  alt="" @click="newNote.type = 'note-todos'"/>
                <img src="../../../assets/images/image.png" title="Add an image"  alt="" @click="newNote.type = 'note-img'"/>
                <img src="../../../assets/images/text.png" title="Text"  alt="" @click="newNote.type = 'note-txt'"/>
            </section>
            <section class="color-picker flex wrap">
                <div v-for="color in colors" class="color-radio" :style="{ 'background-color': color }" @click="newNote.style = color"></div>
                
            </section>
        </div>    
         <form class="note-edit flex column" v-if="newNote" >
            <div class="input-box">
                <textarea v-if="newNote.type === 'note-txt'" v-model="noteInfo['note-txt'].txt" cols="30" rows="10" required></textarea>
                <span>Add a message</span>    
            </div>
            <ul v-if="newNote.type === 'note-todos'" class="input-box">
                <h2>Todo:</h2>
                <label for="todoLabel">Label: </label>
                <input type="text" id="todoLabel" v-model="noteInfo['note-todos'].label" placeholder="Label..." required />
                <li v-for="(todo, index) in noteInfo['note-todos'].todos">
                    <input type="text" v-model="noteInfo['note-todos'].todos[index].txt" required/>
                    <button @click.stop.prevent="noteInfo['note-todos'].todos.splice(index, 1)">X</button>
                </li>
                <button @click.stop.prevent="noteInfo[newNote.type].todos.push({ txt: '', doneAt: null })">Add todo</button>
            </ul>
            
            <div v-if="newNote.type === 'note-img'" class="input-box">
                <input type="text" v-model="noteInfo['note-img'].title"  placeholder="Image Title..." required/>
                <input type="text" v-model="noteInfo['note-img'].url" placeholder="Type image url here!" required/>
            </div>
            <button v-if="newNote">Save</button>
        </form>
     
    </div>
    `,
    data() {
        return {
            colors: ['#DB2828', '#F2711C', '#FBBD00', '#B5CC18', '#21BA45', '#00B5AD', '#2185D0', '#6435C9', '#A333C8', '#E03997',],
            newNote: noteService.createNewNote(),
            noteInfo: {
                'note-txt': {
                    txt: '',
                },
                'note-todos': {
                    label: '',
                    todos: [{ txt: '', doneAt: null }]
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
            if (this.note) {
                this.newNote = noteService.get(this.note.id)
                    .then(note => {
                        this.newNote = note
                        this.noteInfo[this.newNote.type] = this.newNote.info
                    })
            } else {
                this.newNote = noteService.createNewNote()
            }
        }
    },
    methods: {
        save() {
            this.newNote.info = this.noteInfo[this.newNote.type]
            console.log(this.newNote)
            this.$emit('save', this.newNote)
        },
        log(res) {
            console.log(res)
        }
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
        //todo ask dvir if this is relevant (same function @ parent)
    },
}