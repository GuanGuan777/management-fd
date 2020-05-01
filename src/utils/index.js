export function parseTime(time, cFormat) {
    console.log(time);

    if (arguments.length === 0) {
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time);
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/');
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
    })
    return time_str;
}

export const categoryMap = [{
        cid: 0,
        title: "网盘",
        clas: "fd-wangpan"
    },
    {
        cid: 1,
        title: "课件",
        clas: "fd-kejian"
    },
    {
        cid: 2,
        title: "视频",
        clas: "fd-shipin"
    },
    {
        cid: 3,
        title: "外链",
        clas: "fd-wailian_icon"
    },
    {
        cid: 4,
        title: "图片",
        clas: "fd-tupian1"
    },
    {
        cid: 5,
        title: "文件",
        clas: "fd-wenjian1"
    },
    {
        cid: 6,
        title: "压缩包",
        clas: "fd-geshi_yasuobaorar"
    },
    {
        cid: 7,
        title: "开发工具",
        clas: "fd-gongju"
    },
    {
        cid: 8,
        title: "参考图书",
        clas: "fd-gongju"
    }
]

export const suffixMap = [{
        title: "txt",
        clas: "fd-kejian"
    },
    {
        title: "mp4",
        clas: "fd-shipin"
    },
    {
        title: "pdf",
        clas: "fd-wailian_icon"
    },
    {
        title: "png",
        clas: "fd-tupian1"
    },
    {
        title: "ppt",
        clas: "fd-geshi_yasuobaorar"
    },
    {
        title: "doc",
        clas: "fd-gongju"
    },
    {
        title: "",
        clas: "fd-gongju"
    }
]

export function parseCategory(id) {
    return categoryMap[id];
}