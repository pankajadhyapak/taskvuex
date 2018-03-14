<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">All Projects</div>

                    <div class="card-body">
                        {{completedProjects}}
                        <ul class="list-group">
                            <li v-for="project in projects"  class="list-group-item">
                                <router-link :to="{path: '/project/' + project.id}" style="display: block">
                                    {{ project.name }}
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
        mounted() {},
        computed: {
            ...mapState([
                'projects'
            ]),
            ...mapGetters([
                'completedProjects',
                'projectCount'
            ])
        }
    }
</script>
