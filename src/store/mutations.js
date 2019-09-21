export default {
    weatherData(state, data){
        state.weatherData = data;
    },
    handLoadingState(state, bool){
        state.isLoad = bool;
    },
    goBackError(state, bool){
        //可以去觸發告訴頁面邏輯目前有錯誤
        state.errorTrigger = bool;
    }
}
