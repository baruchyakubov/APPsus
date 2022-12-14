import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import keepApp from './views/keep-app.cmp.js'
import gmailApp from './views/gmail-app.cmp.js'


import emailDetails from './apps/mail/views/email-details.cmp.js'
import emailComposed from './apps/mail/cmps/email-compose.cmp.js'

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
			children:[
				{
					path: '/gmail-app/:id',
					component: emailDetails
				},
				{
					path: '/gmail-app/compose',
					component: emailComposed
				}
			]
		},
	
		{
			path: '/keep-app',
			component: keepApp
		},
	],
}

export const router = createRouter(routerOptions)
