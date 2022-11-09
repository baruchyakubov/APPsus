import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import keepApp from './views/keep-app.cmp.js'
import gmailApp from './views/gmail-app.cmp.js'

import inboxList from '../apps/mail/views/inbox-list.cmp.js'
import emailDeatails from '../apps/mail/views/email-details.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/gmail-app',
			component: gmailApp,
			children: [
				{
					path: 'inbox',
					component: inboxList,
				}
			]
		},
		{
			path: '/gmail-app/inbox/:id',
			component: emailDeatails
		},
		{
			path: '/keep-app',
			component: keepApp
		},
	],
}

export const router = createRouter(routerOptions)
