import { dragService } from "../services/drag-and-drop.service.js"

export default {
    props: ['note'],
    template: /*html*/`
    <section class="note flex" 
    :style="{ 'background-color': note.style }" :class="noteModes">
        <img class="icon duplicate" src="./assets/images/drag.png" alt="">

        <div class="flex column" style="width: 100%;" v-if="note.type === 'note-txt'" >
            <h1 class="note-header">{{note.info.title}}</h1>
            <p class="note-content">{{note.info.txt}}</p>
        </div>

        <div class="flex column" style="width: 100%;" v-if="note.type === 'note-todos'">
            <h1 class="note-header">{{note.info.title}}</h1>
            <ul class="note-content" >
                <li v-for="todo in note.info.todos">{{todo.txt}}</li>
            </ul>
        </div>

        <div class="flex column" style="width: 100%;" v-if="note.type === 'note-img'">
            <h1 class="note-header">{{note.info.title}}</h1>
            <img class="note-content"  :src="note.info.url" alt="123" />
        </div>
        <div class="note-options actions full flex" :class="noteModes" :style="{ 'background-color': note.style }">
            <img class="icon" src="./assets/images/pin.png" title="pin this note" @click="$emit('noteAction', { action: 'pin', note: this.note })" alt="" :class="noteModes" 
            @mouseover="isFakePinned = !isFakePinned" @mouseleave="isFakePinned = !isFakePinned"/>
            <img class="icon" src="./assets/images/edit.png" title="edit this note" @click="$emit('noteAction', {action:'edit', note})" alt="" />
            <img class="icon" src="./assets/images/mail.png" title="send this note via gMail" @click="$emit('noteAction', {action: 'mail', note})" alt="" />
            <img class="icon" src="./assets/images/copy.png" alt="" @click="$emit('noteAction', {action:'copy', note})" title="copy this note">
            <img class="icon" src="./assets/images/delete.png" title="delete this note" @click="$emit('noteAction', {action:'remove', note})" alt="" />
        </div>
    </section>
    `,
    data() {
        return {
            isFakePinned: false,
        }
    },
    computed: {
        noteModes() {
            return { pinned: this.note.isPinned || this.isFakePinned }
        }
    },
    type() {
        const type = this.note.type
        return {
            text: type === 'note-txt',
            image: type === 'note-img',
            todos: type === 'note-todos'
        }
    },
}
