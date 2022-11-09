import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export const gmailService = {
    query,
    get,
    remove,
    save,
    getUser
}

const EMAILS_KEY = 'emails'

_createEmails()

function query() {
    return storageService.query(EMAILS_KEY)
}

function getUser(){
    return Promise.resolve({
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
       })
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY)
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email)
    } else {
        return storageService.post(EMAILS_KEY, email)
    }
}


function _createEmails() {
    let emails =  JSON.parse(localStorage.getItem(EMAILS_KEY)) 
   
            if (!emails || !emails.length) {
                emails = [
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki'
                    },

                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki'
                    }
                ]
                localStorage.setItem(EMAILS_KEY, JSON.stringify(emails) || null)
            }
        }

