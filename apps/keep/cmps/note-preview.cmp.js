export default {
    props: ['note'],
    template: /*html*/`
    <section class="note flex justify-center" 
    :style="{ 'background-color': note.style }" :class="isPinned">
        <img class="icon duplicate" src="../../../assets/images/copy.png" alt="" @click="$emit('noteAction', {action:'copy', note})">

        <div class="flex column" v-if="note.type === 'note-txt'" >
            <h1 class="note-header">{{note.info.title}}</h1>
            <p class="note-content">{{note.info.txt}}</p>
        </div>

        <div class="flex column" v-if="note.type === 'note-todos'">
            <h1 class="note-header">{{note.info.label}}</h1>
            <ul class="note-content" >
                <li v-for="todo in note.info.todos">{{todo.txt}}</li>
            </ul>
        </div>

        <div class="flex column align-center" v-if="note.type === 'note-img'">
            <h1 class="note-header">{{note.info.title}}</h1>
            <img class="note-content"  :src="note.info.url" alt="123" />
        </div>
        <div class="note-options actions full flex">
            <img class="icon" src="../../../assets/images/pin.png" title="pin this note" @click="$emit('noteAction', { action: 'pin', note: this.note })" alt="" :class="isPinned" 
            @mouseover="isFakePinned = !isFakePinned" @mouseleave="isFakePinned = !isFakePinned"/>
            <img class="icon" src="../../../assets/images/edit.png" title="edit this note" @click="$emit('noteAction', {action:'edit', note})" alt="" />
            <img class="icon" src="../../../assets/images/mail.png" title="send this note via gMail" @click="$emit('noteAction', {action: 'mail', note})" alt="" />
            <img class="icon" src="../../../assets/images/delete.png" title="delete this note" @click="$emit('noteAction', {action:'remove', note})" alt="" />
        </div>
    </section>
    `,
    data() {
        return {
            isFakePinned: false,
        }
    },
    computed: {
        isPinned() {
            return { pinned: this.note.isPinned || this.isFakePinned }
        },
        type() {
            const type = this.note.type
            return {
                text: type === 'note-txt',
                image: type === 'note-img',
                todos: type === 'note-todos'
            }
        },
    },
}