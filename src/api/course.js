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


export function updateCourse(id, data) {
    return request({
        url: '/course/${id}',
        method: 'put',
        data,
    })
}

export function deleteCourse(id) {
    return request({
        url: '/course/${id}',
        method: 'delete',
    })
}

export function getResource(cid) {
    return request({
        url: `/course/${cid}/resources`,
        method: 'get',
    })
}