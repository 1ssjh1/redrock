// 版本1  修改后的柯里化函数
function curry(fn, length) {
    let arr = [];
    return function() {
        arr.push(...arguments)
        return length > arr.length ? arguments.callee : fn.apply(this, arr)
    }
}
// 调整参数 传入 不同的 个数
function multiFn(...rest) {
    // 不要去 取出 最后  一个！！！！！  那个是 啥 事规定length
    return rest.reduce((pre, nex) => {
        (pre * nex)
    })
}
let multi = curry(multiFn, 4);
console.log(multi(2)(3)(4)(5));



// 版本2   toString


function add() {
    let args = [...arguments]
    let fn = function() {
        args.push(...arguments)
        return fn
    }
    fn.toString = function() {
        return args.reduce((x, y) => x + y)
    }
    return fn
}
console.log(add(1, 2, 3));