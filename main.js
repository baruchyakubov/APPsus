const { createApp } = Vue
import { eventBus } from './services/event-bus.service.js'
import { router } from './routes.js'

import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    template: `
    <div class="main-screen" @click="toggleScreen" v-bind:class="screenStyle"></div>
        <section>
            <app-header />
            <router-view />
            <app-footer />
            <user-msg />
        </section>
    `,
    data() {
        return {
            isScreen: false,
        }
    },
    created() {
        eventBus.on('toggleScreen', this.setScreen)
    },
    methods: {
        toggleScreen() {
            eventBus.emit('toggleScreen')
        },
        setScreen(screen) {
            this.isScreen = !this.isScreen
        },
    },
    computed: {
        screenStyle() {
            return { on: this.isScreen === true }
        }
    },
    components: {
        appHeader,
        appFooter,
        userMsg,
    },
}

const app = createApp(options)
app.use(router)
app.mount('#app')
