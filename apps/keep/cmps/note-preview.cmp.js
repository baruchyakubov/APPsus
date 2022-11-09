export default {
    props: ['note'],
    template: /*html*/`
        <section class="note flex align-center justify-center">
            {{note.info.txt}}

            <div class="note-options full flex justify-between">
            <img src="../../../assets/images/pin.png" alt="" />
            <img src="../../../assets/images/edit.png" alt="" />
            <img src="../../../assets/images/mail.png" alt="" />
            <img src="../../../assets/images/paint.png" alt="" />
            <img src="../../../assets/images/delete.png" alt="" />
            </div>
        </section>
    `
}