// <label for="todoLabel">Label: </label>
// <input type="text" id="todoLabel" v-model="noteInfo['note-todos'].label" placeholder="Label..." required />
{/* <input type="text" v-model="noteInfo['note-img'].title"  placeholder="Image Title..." required/> */ }
import { eventBus } from "../../../services/event-bus.service.js"
import { noteService } from "../services/keep-app.service.js"

export default {
    props: ['note', 'isScreen'],
    template: /*html*/`
    <div class="modal" :class="screenStyle" :style="{ 'background-color': newNote.style }" @submit.prevent="save">
        <div class="note-options types full flex column">
            <section class="flex">
                <img class="icon" src="../../../assets/images/pin.png" title="Pin this note"  alt="" @click="newNote.isPinned = !newNote.isPinned" :class="isPinned"/>
                <img class="icon" src="../../../assets/images/list.png" title="Todo-list"  alt="" @click="newNote.type = 'note-todos'"/>
                <img class="icon" src="../../../assets/images/image.png" title="Add an image"  alt="" @click="newNote.type = 'note-img'"/>
                <img class="icon" src="../../../assets/images/text.png" title="Text"  alt="" @click="newNote.type = 'note-txt'"/>
            </section>
            <section class="color-picker flex wrap">
                <div v-for="color in colors" class="color-radio" :style="{ 'background-color': color }" @click="newNote.style = color"></div>
                
            </section>
        </div>    
         <form class="note-edit flex column" v-if="newNote" >
             <div class="input-box">
                 <input type="text" v-model="noteInfo['note-img'].title" required/>
                 <span>Title</span>    
             </div>

            <div class="input-box" v-if="newNote.type === 'note-txt'">
                <textarea v-model="noteInfo['note-txt'].txt" cols="30" rows="10" required></textarea>
                <span>Add a message</span>    
            </div>
            <ul v-if="newNote.type === 'note-todos'" >
                <li v-for="(todo, index) in noteInfo['note-todos'].todos" class="input-box">
                    <input type="text" v-model="noteInfo['note-todos'].todos[index].txt" required/>
                    <button class="delete-todo" @click.stop.prevent="noteInfo['note-todos'].todos.splice(index, 1)">X</button>
                </li>
            <img class="icon" src="../../../assets/images/add.png" alt="123" @click.stop.prevent="noteInfo[newNote.type].todos.push({ txt: '', doneAt: null })" title="Add a todo!"/>
            </ul>
            
            <div v-if="newNote.type === 'note-img'" class="input-box">
                <input type="text" v-model="noteInfo['note-img'].url" required/>
                <span>Type image url here!</span>
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
                    title: '',
                    txt: '',
                },
                'note-todos': {
                    title: '',
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
            this.resetInfo()
            this.newNote = noteService.createNewNote()
        },
        resetInfo() {
            this.noteInfo = {
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
        },
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        },
        isPinned() {
            return { pinned: this.newNote.isPinned }
        },
        //todo ask dvir if this is relevant (same functions exist elsewhere)
    },
}