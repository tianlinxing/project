let http = require('http');
let fs = require('fs');
function read(url, cb) {
    // cb 自己定义的回调函数 只有当读取文件成功的时候才会执行
    // 并且把读取到的数据传给cb
    fs.readFile(url,(err, data)=> {
        if(err) {
            console.log('读取失败');
            return;
            cb(data);
        }
    })
}
let p = http.createServer(function (req, res) { // req:request res:response
    // req.headers // 获取请求头  
    res.setHeader("content-type",'image/jpg'); // 设置响应头
    console.log('hello world');
    console.log(req.url); // 前端请求的路径
    // 告诉浏览器 返回的是一张图片
    read('http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg',(data) => {
        res.end(data);
    })
    // 响应给前端的内容
    // req.url('http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg')
    // res.end();
})

// 0 ~ 65535
p.listen('8080', () => {
    console.log('服务起于8080端口');

});