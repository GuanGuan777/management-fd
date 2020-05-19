import request from '@/utils/request.js';
import qs from 'qs';

export function upload(file) {
    return request({
        url: `/uploadFile`,
        method: 'post',
        data: file,
        headers: {
            'Content-Type': "multipart/form-data;"
        }
    })
}

export function multipleUpload(files) {
    return request({
        url: `/uploadMultipleFiles`,
        method: 'post',
        data: files,
        headers: {
            'Content-Type': "multipart/form-data;"
        }
    })
}


export function download(url) {
    return request({
        url: `/downloadFile/${url}`,
        method: 'get'
    })
}


export function addResource(resource) {
    return request({
        url: `/resource`,
        method: 'post',
        data: resource,
    })
}

export function deleteResource(id) {
    return request({
        url: `/resource/${id}`,
        method: 'delete',
    })
}

export function updateResource(id, data) {
    return request({
        url: `/resource/${id}`,
        method: 'put',
        data: data
    })
}