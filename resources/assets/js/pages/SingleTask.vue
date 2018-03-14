<template>
    <div class="container" v-if="task">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        Single Task
                        <button
                                class="float-right btn btn-outline-info btn-sm"
                                @click="isEditing = true">
                            Edit
                        </button>
                    </div>

                    <div class="card-body">
                        <label class="text-muted">Title</label>
                        <h3 v-if="!isEditing">{{ task.title }}</h3>
                        <input v-else type="text" class="form-control" v-model="task.title">
                        <hr>
                        <label class="text-muted">Description</label>
                        <p  v-if="!isEditing">{{ task.description}}</p>
                        <textarea class="form-control" v-else v-model="task.description">
                        </textarea>
                        <hr>
                        <label class="text-muted">Status</label>
                        <p  v-if="!isEditing">{{ task.completed ? 'Completed' : 'Incomplete' }}</p>
                        <input v-else type="checkbox" v-model="task.completed">

                        <button v-if="isEditing" @click="updateTask()" class="btn btn-success btn-block" >Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            //this.getTasks(this.$route.params.id);
        },
        data(){
            return {
                isEditing: false
            }
        },
        computed:{
            task(){
                return this.$store.getters.getTasksById(this.$route.params.id)
            }
        },
        methods:{
            updateTask(){
                let vm = this;
                this.$store.dispatch('UPDATE_TASK', vm.task).then(function (e) {
                    vm.isEditing = false;
                });
            }
        }
    }
</script>
