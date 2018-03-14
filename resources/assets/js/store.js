import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        projects: [],
        tasks:[]
    },
    actions: {
        UPDATE_TASK(state, task){
            axios.put("/api/task/"+task.id, task)
                .then(function (success) {
                    state.commit('UPDATE_TODO', {list: success.data})
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Something Went Wrong in actions");
                });
        },
        LOAD_PROJECT_LIST(state) {
            axios.get('/api/projects')
                .then(function (response) {
                    state.commit('SET_PROJECT_LIST', {list: response.data})
                })
                .catch(function (error) {

                })
        },
        LOAD_TASK_LIST(state) {
            axios.get('/api/tasks')
                .then(function (response) {
                    state.commit('SET_TASK_LIST', {list: response.data})
                })
                .catch(function (error) {

                })
        }
    },
    mutations: {
        SET_PROJECT_LIST(state,data){
            state.projects = data.list
        },
        UPDATE_TODO(state,data){
            let task =  _.find(state.tasks, function(o) { return o.id == data.list.id; });
            task = data.list;
        },
        SET_TASK_LIST(state,data){
            state.tasks = data.list
        }
    },
    getters: {
        completedProjects(state){
            return state.projects.filter(project => project.active).length;
        },
        // getTasksByProjectId : state => id => {
        //     return state.tasks.filter(task => task.project_id == id);
        // },
        getTasksByProjectId(state) {
            return function (id) {
                return _.filter(state.tasks, function(o) { return o.project_id == id; });
            }
        },
        getTasksById(state){
            return function (id) {
                return _.find(state.tasks, function(o) { return o.id == id; });
            }
        }
    }
});
export default store