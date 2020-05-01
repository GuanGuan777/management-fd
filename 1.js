let url = `https://www.qiniu.com/products/qcdn
?entry=index&ts=1585703058520#feature`

function parseUrl(url) {
    // write code here
    let obj = {
        protocol: '',
        host: '',
        path: '',
        params: {},
        hash: ''
    };

    if (url === '') {
        return JSON.stringify({})
    }
    let arr = url.split('://');
    obj.protocol = arr[0];
    let arr1 = arr[1].split('?');
    obj.host = arr1[0].split('/')[0];
    obj.path = arr1[0].split('/')[1];
    let o = {};
    let a = arr1[1].split('#');
    obj.hash = a[1];
    (a[0].split("&")).forEach(element => {
        o[`${element.split('=')[0]}`] = element.split('=')[1];
    });
    obj.params = o;
    return JSON.stringify(obj);
}

parseUrl(url);

// String.prototype.replaceAll() = function (obj) {
//     Object.keys(obj).forEach(item => {
//         let replaceStr = obj[item];
//         this.replace(item);
//     })
//     return this;
// }