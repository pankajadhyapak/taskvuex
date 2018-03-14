import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/projects.vue';
import TaskList from './pages/TaskList.vue';
import SingleTask from './pages/SingleTask.vue';
import PageNotFound from './pages/NotFound.vue';

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/project/:id',
        component: TaskList
    },
    {
        path: '/task/:id',
        component: SingleTask
    },
    {
        path: "*",
        component: PageNotFound
    }

];
export default new VueRouter({
    mode: 'history',
    base: '/dashboard/',
    routes
});
