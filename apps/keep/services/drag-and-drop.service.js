export const dragService = {
    onDown,
    onMove,
    onUp,
    getEventPos,
}
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

//todo add listeners for events
function onDown(ev) {
    console.log('Im from onDown')
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    if (!isCircleClicked(pos)) return
    setCircleDrag(true)
    //Save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'move'

}

function onMove(ev) {
    console.log('Im from onMove')
    if (!isDrag) return
    // const { isDrag } = getCircle()
    const pos = getEvPos(ev)
    //Calc the delta , the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveCircle(dx, dy)
    //Save the last pos , we remember where we`ve been and move accordingly
    gStartPos = pos
    //The canvas is render again after every move
    renderCanvas()

}

function onUp() {
    console.log('Im from onUp')
    setCircleDrag(false)
    document.body.style.cursor = 'default'
}

function getEvPos(ev) {

    //Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}