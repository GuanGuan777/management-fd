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


export function getCourse(uid) {
    return request({
        url: `/user/${uid}/courses`,
        method: 'get',
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}

export function addUsers(data, type) {
    return request({
        url: '/user/all',
        method: 'post',
        data,
        param: {
            type: type
        }
    })
}