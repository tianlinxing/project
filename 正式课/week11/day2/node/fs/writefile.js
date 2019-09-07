let fs = require('fs');
// 这也是一个异步函数 在node中 不带sync 的事件 基本都是异步的
fs.writeFile('./test/1.js','hello','utf-8',(err)=> {
    // 第一个参数是要写的文件路径  若没有对应的文件 则会自动创造一个
    // 第二个参数 是要写的内容
    // 第三个参数 是编码格式 utf-8
    // 第四个参数 是一个回调函数,回调函数只有一个形参,参数有值,代表写文件失败
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})

fs.writeFile('./test/2.js','console.log("你好")','utf-8',(err)=>{
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
});
// let res = fs.writeFileSync('./test/1.js','你好','utf-8'); // res 结果是undefined
// 同步异步 不用同时写入 容易出现不可预知的错误