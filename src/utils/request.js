import axios from 'axios';
import {
    setCookies
} from './auth';
import {
    getToken
} from './auth';
import {
    MessageBox,
    Message
} from 'element-ui';
import store from '@/store';

// function request(options) {
//     return axios(options).then(res => {
//         return res;
//     }).catch(error => {
//         return Promise.reject(error);
//     });
// }
const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: "/api/v1",
    timeout: 5000,

});

request.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['Authorization'] = getToken();
    }
    return config;
}, error => {
    console.error("请求错误", error);
    const {
        response: {
            status,
            statusText
        }
    } = error;
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    const res = response.data;
    console.log(res, response);
    if (response.status !== 200) {
        console.log("!=200");
        Message({
            message: res.message || '出现内部错误',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(new Error(res.message || '出现内部错误'))
    }
    // if (response.data.code !== '200') {
    //     console.log("!=200");
    //     Message({
    //         message: res.data.msg || '出现内部错误',
    //         type: 'error',
    //         duration: 5 * 1000
    //     })
    //     return Promise.reject(new Error(res.message || '出现内部错误'))
    // }
    Message({
        message: res.msg || '成功',
        type: 'success',
        duration: 5 * 1000
    })
    return response;
}, error => {
    console.error('错误响应', error) // for debug
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
})


export default request;