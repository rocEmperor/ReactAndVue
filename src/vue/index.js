import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from '@src/vue/router.js';
import store from '@src/vue/store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

new Vue({
    router,
    store
}).$mount("#vue_app")
