export default {
    getLoadState: state=>{
        return state.isLoad;
    },
    getWeatherItem: state =>{
        return state.weatherData.histories;
    },
}