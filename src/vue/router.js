import App from '@src/vue/App.vue';
import About from '@src/vue/pages/About/index.vue';
import Inbox from '@src/vue/pages/Inbox/index.vue';
import Message from '@src/vue/pages/Message/index.vue';

const routes = [
    {
        path: '/vue',
        component: App,
        children: [
            { path: 'about', component: About },
            { path: 'inbox', component: Inbox },
            { path: 'message', component: Message },
        ]
    }
]

export default routes;
  