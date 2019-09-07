let http = require('http'); // 服务模块
// 使用 http.createServer(Callback).listen('端口号', callback2)
// 在对应端口号 起了一个本地的服务 callback2 是服务启动之后触发的回调
// callback 会在响应请求时触发 只要有请求过来 就会触发 callback
let p = http.createServer(function(req, res) { // req:request res:response
    console.log('hello world');
    console.log(req.url); // 前端请求的路径
    
    // 响应给前端的内容
    res.end('hello');
})

// 0 ~ 65535
p.listen('8000',()=> {
    console.log('服务起于8000端口');
    
});