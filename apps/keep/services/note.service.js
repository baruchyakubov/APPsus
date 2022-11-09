import { utilService } from '../services/util.service.js'
import { storageService } from '../services/async-storage.service.js'
const NOTES_KEY = 'notes'
_createNotes()

export const bookService = {
    query,
    get,
    remove,
    save,
}

function query() {
    return storageService.query(NOTES_KEY)
}


function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY)
}

function save(book) {
    if (book.id) {
        return storageService.put(NOTES_KEY, book)
    } else {
        return storageService.post(NOTES_KEY, book)
    }
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
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
        utilService.saveToStorage(NOTES_KEY, notes)

    }
}
