import axios from 'axios';

const Domain = domain =>{
    switch (location.hostname) {
        case "localhost":
            return '/';
        default:
            return domain;
    }
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
    return Promise.resolve(response);
}, error => {
    return Promise.reject(error.response.data);
})


export const getWeatherData = () => weatherRequest.get('/weather/api/weathers/1.json');
