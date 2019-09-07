// express 是node 的一个封装好的 库
let express = require('express');
let app = express();
// 中间件 都放在 路径请求的上边
app.use(function(req,res,next) {
    res.setHeader('zf',123);
    req.name = 666;
    next(); // 必须的 使用中间件的时候必须使用 next()
});
// 使用express 的静态模板
app.use(express.static('./src2'));
app.get('/',function(req,res) {
    // 若是get 请求并且请求的路径是/ 的
    // 会触发该回调函数
    console.log('你好');
    console.log(req.name);
    res.send('12345');
});
app.post('/list',function(req,res) {
    // 若是post请求并且请求的路径是/list 的
    // 会触发该回调函数
    res.send('您好');
});

app.all('*',function(req,res) {
    // 所有类型的请求 所有没有被匹配的路径都会走到该函数
    res.send('404');
});
app.listen('8000',function() {
    console.log('服务起于8000');
    
});