export default {
    props: ['note'],
    template: /*html*/`
        <section class="note flex align-center justify-center" 
            :style="{ 'background-color': note.style }">
            <img class="pin" :class="isPinned" src="../../../assets/images/pin.png" alt="">            
            
            <span v-if="note.type === 'note-txt'">{{note.info.txt}}</span>

            <ul v-if="note.type === 'note-todos'">
                <h1>{{note.info.label}}</h1>
                <li v-for="todo in note.info.todos">{{todo.txt}}</li>
            </ul>

            <img v-if="note.type === 'note-img'" :src="note.info.url" alt="123" />

            <div class="note-options actions full flex">
            <img class="icon" src="../../../assets/images/pin.png" title="pin this note" @click="$emit('noteAction', {action:'pin', note})" alt="" />
            <img class="icon" src="../../../assets/images/edit.png" title="edit this note" @click="$emit('noteAction', {action:'edit', note})" alt="" />
            <img class="icon" src="../../../assets/images/mail.png" title="send this note via gMail" @click="$emit('noteAction', {action: 'mail', note})" alt="" />
            <img class="icon" src="../../../assets/images/delete.png" title="delete this note" @click="$emit('noteAction', {action:'remove', note})" alt="" />
        </div>
            
        </section>
    `,
    computed: {
        isPinned() {
            return { hidden: !this.note.isPinned }
        },
    },
}