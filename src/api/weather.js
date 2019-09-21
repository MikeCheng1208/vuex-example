import axios from 'axios';
import handStatusError from './handStatusError.js';
import handResponseError from "./handResponseError.js";
const Domain = domain =>{
    if(process.env.NODE_ENV === 'development'){
        switch (location.hostname) {
            case "localhost":
                return '/';
            default:
                return domain;
        }
    }
    return domain;
}

const weatherRequest = axios.create({
    baseURL: Domain('https://works.ioa.tw/'),
});

// http request 攔截器
weatherRequest.interceptors.request.use(async request => {
    // request.headers['Authorization'] = await AppFun('getUserToken');
	return request;
}, error => {
	return Promise.reject(error);
})

// http response 攔截器
weatherRequest.interceptors.response.use(response  => {
    // if(response.data.status !== "1") handResponseError(response);
    return Promise.resolve(response);
}, error => {
    handStatusError(error.response);
    return Promise.reject(error.response.data);
})


export const getWeatherData = () => weatherRequest.get('/weather/api/weathers/1.json');
