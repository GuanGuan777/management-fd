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
        title: "文档",
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
        title: ".txt",
        clas: "fd-kejian"
    },
    {
        title: ".mp4",
        clas: "fd-shipin"
    },
    {
        title: ".pdf",
        clas: "fd-wailian_icon"
    },
    {
        title: ".png",
        clas: "fd-tupian1"
    },
    {
        title: ".ppt",
        clas: "fd-geshi_yasuobaorar"
    },
    {
        title: ".doc",
        clas: "fd-gongju"
    },
    {
        title: ".rar",
        clas: "fd-gongju"
    }
]

export const option = {
    playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
    autoplay: false, // 如果为true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 是否视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [{
        type: "video/mp4", // 类型
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' // url地址
        // src: ""
    }],
    poster: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', // 封面地址
    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
        timeDivider: true, // 当前时间和持续时间的分隔符
        durationDisplay: true, // 显示持续时间
        remainingTimeDisplay: false, // 是否显示剩余时间功能
        fullscreenToggle: true // 是否显示全屏按钮
    }

}

export function parseCategory(id) {
    return categoryMap[id];
}