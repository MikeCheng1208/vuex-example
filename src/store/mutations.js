export default {
    weatherData(state, data){
        state.weatherData = data;
    },
    handLoadingState(state, bool){
        state.isLoad = bool;
    }
}
