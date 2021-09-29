/* 引入axios模块 */
import axios from 'axios';


/* 对axios模块进行二次封装 */
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    /* 定义错误状态吗 */
    if (error.response.status === 500) {
        console.log("内部服务器错误");
    }
    else if (error.response.status === 404) {
        console.log("该接口不存在");
    }
    else if (error.response.status === 300) {
        console.log("错误定向");
    }

    return Promise.reject(error);
});

export default axios;