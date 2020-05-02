import request from '@/utils/request.js';
import qs from 'qs';

export function getCourseDetail(cid) {
    return request({
        url: `/course/${cid}`,
        method: 'get',
    })
}

export function getCourse(cid) {
    return request({
        url: `/course`,
        method: 'get',
    })
}

export function addCourse(data) {
    return request({
        url: '/course/',
        method: 'post',
        data,
    })
}

export function addResource(data) {
    return request({
        url: `/courses/${cid}/resources`,
        method: 'post',
        data,
    })
}

export function getResource() {
    return request({
        url: `/courses/${cid}/resources`,
        method: 'get',
    })
}