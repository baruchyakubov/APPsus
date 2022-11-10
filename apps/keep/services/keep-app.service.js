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
                style: '#DB2828',
                isPinned: false,
                info: {
                    title: 'yasmin 22',
                    txt: ""
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#FBBD00',
                isPinned: false,
                info: {
                    title: 'why of navigation',
                    txt: "style false why about "
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#F2711C',
                isPinned: false,
                info: {
                    title: 'LAKOVA SHELI',
                    txt: "shalosh pinNotes"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#B5CC18',
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
                    title: "Bobi and Me"
                },
                style: '#21BA45'
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                style: '#00B5AD',
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Master Css", doneAt: null },
                        { txt: "Master Vue", doneAt: null },
                        { txt: "Master jQuery", doneAt: null },
                        { txt: "Master grid", doneAt: null },
                        { txt: "Master Yoda", doneAt: null },
                    ]
                }
            }
        ]
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes) || null)
}


