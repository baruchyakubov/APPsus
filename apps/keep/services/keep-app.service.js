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
                style: '#5dacbd',
                isPinned: false,
                info: {
                    txt: "111111111111"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#5dacbd',
                isPinned: false,
                info: {
                    txt: "22222222222"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#5dacbd',
                isPinned: false,
                info: {
                    txt: "33333333333333"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                style: '#5dacbd',
                isPinned: true,
                info: {
                    txt: "4444444444444"
                }
            },
            // {
            //     id: utilService.makeId(),
            //     type: "note-img",
            //     info: {
            //         url: "../assets/images/youtube-add",
            //         title: "Bobi and Me"
            //     },
            //     style: {
            //         backgroundColor: "#00d"
            //     }
            // },
            // {
            //     id: utilService.makeId(),
            //     type: "note-todos",
            //     info: {
            //         label: "Get my stuff together",
            //         todos: [
            //             { txt: "Driving liscence", doneAt: null },
            //             { txt: "Coding power", doneAt: 187111111 }
            //         ]
            //     }
            // }
        ]
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes) || null)
}


