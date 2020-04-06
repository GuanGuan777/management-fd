import Cookies from 'js-cookie';

const TOKEN = 'TOKEN';

export function getToken() {
    return Cookies.get(TOKEN);
}

export function setToken(token) {
    return Cookies.set(TOKEN, token);
}

export function removeToken() {
    return Cookies.remove(TOKEN);
}