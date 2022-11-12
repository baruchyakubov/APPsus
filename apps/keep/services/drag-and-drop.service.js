export const dragService = {
    startDrag,
}

function startDrag(e, item) {
    console.log(item);
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.sendData('itemId', item.id)
}

function onDrop(e) {
    console.log(e);
}