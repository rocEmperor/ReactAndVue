<template>
    <div class="Message">
        <div class="icon"></div>
        <div>组件Message-{{name}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'vue'
        }
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>