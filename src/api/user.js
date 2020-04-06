import request from '@/utils/request.js';

export function login(userInfo) {
    return request({
        url: '/user/login',
        method: 'get',
        userInfo
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}