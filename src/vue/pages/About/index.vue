<template>
    <div class="a-bout">
        <div class="icon" @click="changeName"></div>
        <div @click="changeActions">组件About-{{aboutData.name}}</div>
        <div @click="goReact" class="btn">点击跳转到react应用</div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    data () {
        return {}
    },
    computed: mapState({
        aboutData: state => state.AboutStore
    }),
    methods: {
        changeName () {
            this.$store.commit({
                type: 'AboutStore/concat',
                payload: {
                    name: 'vue-new'
                }
            })
        },
        changeActions () {
            this.$store.dispatch({
                type: 'AboutStore/change',
                payload: {
                    name: 'vue-哈哈'
                }
            })
        },
        goReact () {
            window.location.href = '/react/about'
        }
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>