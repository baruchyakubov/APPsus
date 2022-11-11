import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
const NOTES_KEY = 'notes'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    createNewNote,
}

function query() {
    return storageService.query(NOTES_KEY)
}


function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}

function createNewNote() {
    return {
        type: 'note-txt',
        isPinned: false,
        style: '#5dacbd',
        info: {
            txt: ''
        }
    }
}


function _createNotes() {
    let notes = JSON.parse(localStorage.getItem(NOTES_KEY))
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: getRandomColor(),
                isPinned: false,
                info: {
                    title: 'iskandar',
                    txt: "what we ate the other day"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: getRandomColor(),
                isPinned: false,
                info: {
                    title: 'Circle of fiths',
                    txt: "Fa Do Sol Re La Mi Si"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: getRandomColor(),
                isPinned: false,
                info: {
                    title: 'LAKOVA SHELI',
                    txt: "shalosh pinNotes"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: getRandomColor(),
                isPinned: true,
                info: {
                    title: '0527304928',
                    txt: "omri's number"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "../../../assets/images/keep/demo-image_1.jpg",
                    title: "last autumn"
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: true,
                info: {
                    url: "../../../assets/images/keep/cartagena.jpg",
                    title: "Cartagena"
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "../../../assets/images/keep/istanbul.jpg",
                    title: "Last day in istanbul.."
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "../../../assets/images/keep/istanbul2.jpg",
                    title: "golden horn"
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "../../../assets/images/keep/medellin.jpg",
                    title: "Medellin"
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "../../../assets/images/keep/sailing.jpg",
                    title: "flotilla sporades 27/4/2012"
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: true,
                info: {
                    url: "../../../assets/images/keep/sunset.jpg",
                    title: "Ecuador.."
                },
                style: getRandomColor()
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                style: getRandomColor(),
                info: {
                    title: "Next time at the Supermarket:",
                    todos: [
                        { txt: "milk 2.5%", doneAt: null },
                        { txt: "bananas", doneAt: null },
                        { txt: "shampoo", doneAt: null },
                        { txt: "tuna", doneAt: null },
                    ]
                }
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                style: getRandomColor(),
                info: {
                    title: "before heading out",
                    todos: [
                        { txt: "finish my work", doneAt: null },
                        { txt: "call mom", doneAt: null },
                        { txt: "whate else????", doneAt: null },
                    ]
                }
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                style: getRandomColor(),
                isPinned: true,
                info: {
                    title: "phone numbers",
                    todos: [
                        { txt: "omri 0531972937", doneAt: null },
                        { txt: "dobi +1 948-3483038", doneAt: null },
                        { txt: "mom 0529349474", doneAt: null },
                        { txt: "dad 0569384934", doneAt: null },
                        { txt: "Avner 0543729372", doneAt: null },
                        { txt: "Master Yoda 0503849383", doneAt: null },
                    ]
                }
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                style: getRandomColor(),
                info: {
                    title: "Haven't been yet:",
                    todos: [
                        { txt: "Morroco", doneAt: null },
                        { txt: "Andalucia", doneAt: null },
                        { txt: "Argentina", doneAt: null },
                        { txt: "Bolivia", doneAt: null },
                        { txt: "Kibutz megido", doneAt: null },
                    ]
                }
            }
        ]
    }
    notes = notes.sort(() => Math.random() > 0.5)
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes) || null)
}


function getRandomColor() {
    const colors = ['#DB2828', '#F2711C', '#FBBD00', '#B5CC18', '#21BA45', '#00B5AD', '#2185D0', '#6435C9', '#A333C8', '#E03997',]
    return colors[Math.floor(Math.random() * colors.length)]
}