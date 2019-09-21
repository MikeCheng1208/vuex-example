<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import LoadingPage from './components/loadingPage.vue'
export default {
    name: 'app',
    components:{
        LoadingPage,
    },
    watch:{
        errorTrigger(status){
            if(!status) return;
            // 如果頁面上有錯誤，導去錯誤處理頁
            // this.$router.push("/error");
        }
    },
    computed:{
        ...mapState([
            'errorTrigger'
        ]),
        ...mapGetters([
            'getWeatherItem'
        ]),
    },
    methods:{
        ...mapActions([
            'getWeatherData'
        ]),
    },
    mounted(){
        this.getWeatherData();
    }
}
</script>
<template>
    <div id="app">
        <h1>台北市氣象</h1>
        <h2 v-for="item in getWeatherItem" :key="item.at">
            {{item.at}} : {{item.desc}}
        </h2>
        <loading-page></loading-page>
    </div>
</template>
<style lang='scss'>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    html, body{
        width: 100%;
        height: 100%;
        background-color: #5c6774;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        text-align: center;
        color: #fff;
        font-size: 30px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    h2{
        font-weight: bold;
        text-align: center;
        display: block;
        width: 260px;
        height: 30px;
        line-height: 30px;
        color: #3db984;
        background-color: #fff;
        margin-bottom: 10px;
        font-size: 14px;
    }
</style>
