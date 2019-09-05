import { apiGetWeatherData } from "../api";
export default {
    // 控制 loading 狀態控制
    handLoadingState({ commit }, bool){
        commit('handLoadingState', bool);
    },
    // 發送料 Api 抓資料
    async getWeatherData ({ commit, dispatch }){
        try {
            const res = await apiGetWeatherData();
            commit('weatherData', res.data);
            dispatch('handLoadingState', false);
        } catch (error) {
            console.error(error);
        }
    },
}