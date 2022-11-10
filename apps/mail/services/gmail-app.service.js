import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export const gmailService = {
    query,
    get,
    remove,
    save,
    getUser,
    queryCriteria,
    saveCriteria
}

const EMAILS_KEY = 'emails'
const CRITERIA_KEY = 'criteria'

_createEmails()
_createCriteria()

function query() {
    return storageService.query(EMAILS_KEY)
}

function queryCriteria(){
    return storageService.query(CRITERIA_KEY)
}

function _createCriteria(){
    let criteria =  JSON.parse(localStorage.getItem(CRITERIA_KEY)) 
    if(!criteria){
        criteria = {
            status: 'inbox',
            txt: '', 
            isRead: true, 
            isStared: false, 
            lables: ['important', 'romantic'] 
           }
           localStorage.setItem(CRITERIA_KEY, JSON.stringify(criteria) || null) 
    }
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

function saveCriteria(criteria){
    localStorage.setItem(CRITERIA_KEY, JSON.stringify(criteria) || null)
    return Promise.resolve(criteria)
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
                        from: 'user@appsus.com',
                        to: 'momo@momo.com',
                        fullname: 'Mahatma Appsus',
                        status: 'sent'
                    },

                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'shuki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'muki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'duki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'pet',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'netflix',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: true,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                    {
                        id: utilService.makeId(),
                        subject: 'Miss you!',
                        body: 'Would love to catch up sometimes',
                        isRead: false,
                        sentAt: 1551133930594,
                        from: 'momo@momo.com',
                        to: 'user@appsus.com',
                        fullname: 'puki',
                        status: 'inbox'
                    },
                ]
                localStorage.setItem(EMAILS_KEY, JSON.stringify(emails) || null)
            }
        }

