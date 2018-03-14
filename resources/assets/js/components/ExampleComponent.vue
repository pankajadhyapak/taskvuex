<template>
    <div class="container" v-if="task">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        Example Component
                    </div>
                    <div class="card-body">
                        <h3>{{ task.title}}</h3>
                        <p>{{ task.description}}</p>
                        <p>{{ task.completed }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        computed:{
            task(){
                return this.$store.getters.getTasksById(1)
            }
        }
    }
</script>
