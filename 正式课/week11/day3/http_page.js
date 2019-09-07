// 需要判断路径  req.url
let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
    // res.setHeader();


    // res.end('123') // end执行过之后就不会再去执行
    // 异步的end 在执行也没有用了 因为前端接收到响应之后就回去了
    // 若请求路径是个/ 或者 /html.index 都返回 my.html
    switch (req.url) {
        case '/':
        case '/index.html':
            fs.readFile('./src/my.html', (err, data) => {
                // 不管什么请求都是 该html 文件
                // 正常应该是 请求什么给什么
                res.end(data);
                // console.log(req.url);
                // res.end();
            });
            break;
        case '/1.js':
                fs.readFile('./src/1.js',(err, data)=> {
                    res.end(data);
                });
            break;
        case '/1.css':
                fs.readFile('./src/1.css',(err, data)=> {
                    res.end(data);
                });
            break;
        
        default:
            // 非法路径统一走404
            res.end('404');
            break;
    }
}).listen('8082', function () {
    console.log(8082);

})