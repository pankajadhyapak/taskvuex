<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">All Tasks</div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li v-for="task in tasks"  class="list-group-item">
                                <router-link :to="{path: '/task/' + task.id}" style="display: block">
                                    {{ task.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        mounted(){},
        data(){return {}},
        computed: {
            tasks() {
                return this.$store.getters.getTasksByProjectId(this.$route.params.id)
            }
        }
    }
</script>
