import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const gmailService = {
    query,
    get,
    remove,
    save
}

const EMAILS_KEY = 'emails'

_createEmails()

function query() {
    return storageService.query(EMAILS_KEY)
}


function get(bookId) {
    return storageService.get(EMAILS_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(EMAILS_KEY)
}

function save(note) {
    if (note.id) {
        return storageService.put(EMAILS_KEY, note)
    } else {
        return storageService.post(EMAILS_KEY, note)
    }
}


function _createEmails() {
    let notes
    storageService.query(EMAILS_KEY)
        .then(res => {
            notes = res
            if (!notes || !notes.length) {
                notes = [
                    {
                        status: 'inbox/sent/trash/draft',
                        txt: 'puki',
                        isRead: true,
                        isStared: true,
                        lables: ['important', 'romantic']
                    },

                    {
                        status: 'inbox/sent/trash/draft',
                        txt: 'puki',
                        isRead: true,
                        isStared: true,
                        lables: ['important', 'romantic']
                    },
                    {
                        status: 'inbox/sent/trash/draft',
                        txt: 'puki',
                        isRead: true,
                        isStared: true,
                        lables: ['important', 'romantic']
                    },
                    {
                        status: 'inbox/sent/trash/draft',
                        txt: 'puki',
                        isRead: true,
                        isStared: true,
                        lables: ['important', 'romantic']
                    }
                ]
                    localStorage.setItem(EMAILS_KEY, JSON.stringify(notes) || null)
            }
        })
}
