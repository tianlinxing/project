new Promise((resolve, reject) => {
    // RESOLVE & REJECT：是自己任意执行的，但是一般情况下，大家都约定成功执行RESOLVE；失败执行REJECT  
    // EXECUTOR 函数(执行函数) 中可以不管控异步操作(但是不管控异步没什么意义)
    resolve(100);
}).then(result => {
    // resolve 执行的时候会触发第一个回调函数执行
    console.log(1)
    return 1000; // 会把这个值传递给一个then中的方法，如果返回的是一个新的Promise实例,则等到Promise处理完成，把处理完成的结果传递给下一个then
}, reason => {
    // reject 执行的时候会触发第二个回调函数执行
    console.log(2)
}).then(result => { // 需要保证执行then方法返回的依然是Promise实例，这样才可以实现链式调用
    // 上一个then中管控的两个方法只要任何一个执行不报错 都会执行这个then中的第一个方法，如果执行报错，会执行当前then中的第二个回调函数
}).catch(reason=> {
    // catch就相当于then(null,reason => {})
})

console.log(3);

// 等待所有的Promise都成功执行then, 反之只要有一个失败就会执行catch
// Promise.all([promise1,...]).then();