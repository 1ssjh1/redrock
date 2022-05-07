const http = "https://www.1905.com/"; //原始网站
const axios = require("axios");
// https://vip.1905.com/?fr=homepc_menu_vip
const instance = axios.create({
    // baseURL: "https://vip.1905.com/list/?fr=h5VIP-tb-1"
    // baseURL: 'sjh-7gh2zz8g7d0bec65-1310877558.tcloudbaseapp.com'
});

//原始请求函数
function req(url) {
    return new Promise((resolve, reject) => {
        instance({
            method: "get",
            url: url
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}

function exc(arr) {
    let reg = /<a class="img" href="(.*?)" target="_blank" title="(.*?)" bind="postHover"/igs
    const new_arr = [];
    // //用exec循环检测特性
    arr.map((item, index, _this) => {
        while (reg.exec(item)) {
            let temp = reg.exec(item);
            new_arr.push({
                url: "http:" + temp[1],
                name: temp[2]
            })
        }
    })
    console.log(new_arr);
    //写成文件 放入一个文件里面
}

async function movie(x, y) {
    let arr = [];
    for (let i = x; i < y; i++) {
        let data = await req(`https://vip.1905.com/list/o6p${i}.shtml`)
        arr[i] = data
    }
    exc(arr)


}
movie(1, 2)