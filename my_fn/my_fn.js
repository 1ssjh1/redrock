const path = require('path'); // 路径
const fs = require('fs'); // 文件读取
const vm = require('vm'); // 文件执行
// 定义导入类，参数为模块路径
function Require(modulePath) {
    // 获取当前要加载的绝对路径
    let absPathname = path.join(__dirname, modulePath);
    // 创建模块，新建Module实例
    const module = new Module(absPathname);
    // 加载当前模块
    tryModuleLoad(module);
    // 返回exports对象
    return module.exports;
}
// 定义模块, 添加文件id标识和exports属性
function Module(id) {
    this.id = id;
    // 读取到的文件内容会放在exports中
    this.exports = {};

}
// 定义包裹模块内容的函数
Module.wrapper = [
    "(function(exports, module, Require, __dirname, __filename) {",
    "})"
]

Module._extensions = {
        '.js': function(module) {
            const content = fs.readFileSync(module.id, 'utf-8');
            const fnStr = Module.wrapper[0] + content + Module.wrapper[1];
            const fn = vm.runInThisContext(fnStr);
            fn.call(module.exports, module.exports, module, Require, __filename, __dirname);

        },
        '.json': function(module) {
            const json = fs.readFileSync(module.id, 'utf8');
            module.exports = JSON.parse(json); // 把文件的结果放在exports属性上
        }
    }
    // 定义模块加载方法
function tryModuleLoad(module) {
    // 获取扩展名
    const extension = path.extname(module.id);
    // 通过后缀加载当前模块

    Module._extensions[extension](module);
    console.log(module);
}

const str = Require("./b.js")
console.log(str.fn());