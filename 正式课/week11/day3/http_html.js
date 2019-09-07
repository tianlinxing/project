let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) { // req:request res:response 
    res.setHeader("content-type",''); // 设置响应头
    fs.readFile('./src/my.index','utf-8',(err, data)=> {
        if(err) {
            res.end('读取失败');
            return;
        }
        res.end(data);
    })
}).listen('8081', () => {
    console.log('服务起于8081端口');

});
