import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import keepApp from './views/keep-app.cmp.js'
import gmailApp from './views/gmail-app.cmp.js'

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
			path:'/gmail-app',
			component: gmailApp
		},
		{
			path:'/keep-app',
			component: keepApp
		},
	],
}

export const router = createRouter(routerOptions)
