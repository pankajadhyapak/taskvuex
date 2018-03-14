/**
 * project's JavaScript dependencies
 */
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store'
import router from './routes';

Vue.use(VueRouter);

window.eventHub = new Vue();


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router,
    store,
    mounted(){
        this.$store.dispatch('LOAD_PROJECT_LIST');
        this.$store.dispatch('LOAD_TASK_LIST');
    }
});
