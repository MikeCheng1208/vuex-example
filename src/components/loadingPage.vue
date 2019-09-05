<script>
import { mapGetters } from 'vuex';
export default {
    name: 'loadingPage',
    computed:{
        ...mapGetters([
            'getLoadState',
        ]),
    },
}
</script>
<template>
    <div v-show="getLoadState" class="loadingpage"></div>
</template>
<style lang='scss' scoped>
    .loadingpage{
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(#000, 0.7);
        width: 100%;
        height: 100%;
    }
</style>
