import request from '@/utils/request.js';
import qs from 'qs';

export function login(userInfo) {
    return request({
        url: '/user/login',
        method: 'post',
        data: qs.stringify(userInfo),
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    })
}

export function getInfo() {
    return request({
        url: '/user/info',
        method: 'get',
    })

}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}