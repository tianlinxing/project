// fs http url path
// 一个请求列表数据的接口 /api/list
// 一个删除数据的接口 /api/del
// 一个添加数据的接口 /api/add
let fs = require('fs');
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
    // req.url 可以知道请求的路径
    // console.log(req.url)
    // 因为前端过来的路径有可能带参数 这时需要 后台把参数接过来 根据路径来判断前端要干什么
    let { pathname, query } = url.parse(req.url, true);
    // res.setHeader('access-control-allow-origin:','*'); // 支持跨域
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    // res.statusCode = 500; // 设置http 状态码 不设置的时候 若是成功请求 默认是200
    // res.statusMessage = 'hello'; // 设置http 状态码 对应的信息
    // 前端请求过来以后， 后端都会做一次判断， 判断这个人是否还在登录阶段
    // 一般是通过cookie中 后端种植的某个字段来判断的; 若还是在合法登录状态的情况下
    // 就直接向下请求数据；若不合法 直接返回失败态

    let obj = {
        errorCode: 0
    }
    switch (pathname) {
        case '/api/list':
            // 若是这个路径 则代表前端想要请求列表数据
            fs.readFile('./data.json', 'utf-8', (err, data) => {
                if (!err) {
                    obj.data = JSON.parse(data);
                    res.end(JSON.stringify(obj));
                    return;
                } else {
                    res.end('error');
                }
            })
            break;
        case '/api/login':
            if (query.psd == '666') {
                // 我们自己规定的密码是666的就是成功 
                // 否则就是失败 这些只是为了我们自己好调试做的判断 实际工作不会这样做
                // 给前端种植cookie
                res.setHeader('Set-Cookie', 'token=' + Date.now() + ';path=/');
                obj.success = 'success';
                res.end(JSON.stringify(obj));
            } else {
                obj.errorCode = 1;
                obj.errorMsg = 'noLogin';
                res.end(JSON.stringify(obj));
            }
            break;
        case '/api/del':
            // 执行删除的时候前端传给我们一个id； 通过query获取
            // 先读取data.json 然后删除; 删除之后再去写入
            fs.readFile('./data.json', 'utf-8', (err, data) => {
                if (err) {
                    // 读取失败
                    res.end('error');
                    return;
                }
                // data是一个字符串
                let ary = JSON.parse(data);
                let tempArr = ary.filter(item => item.id != query.id);
                // tempArr就是删除之后的数组
                fs.writeFile('./data.json', JSON.stringify(tempArr), 'utf-8', (err) => {
                    if (err) {
                        res.end('error');
                        return;
                    }
                    res.end(JSON.stringify(obj));// 后台删除成功，才能告诉前端成功删除
                })
            })
            break;
        case '/api/add':
            // 执行添加或者修改 的动作
            // 添加 前端没有传递id 就是添加
            // 修改 前端传递带有id就是修改
            // 怎么获取前端传递的数据？post
            let dataStr = '';
            req.on('data', function (str) {
                // post 传递数据， 是分成一段一段的传递数据，这时会触发该函数
                dataStr += str;
            });

            req.on('end', function () {
                // dataStr.toString() 获取到的是前端给的JSON字符串
                let reqData = JSON.parse(dataStr.toString());
                // reqData 就是前端给的对象
                // 根据 reqData 是否有id来判断要干的事情
                // 没有id 后端添加id 然后把数据放到 data.json中
                if (reqData.id === undefined) {
                    // 不存在id 就是添加
                    reqData.id = Math.random();
                    fs.readFile('./data.json', 'utf-8', (err, data) => {
                        if (err) {
                            obj.errorCode = 5; // 后端操作失败
                            res.end(JSON.stringify(obj));
                            return;
                        }
                        let tempAry = JSON.parse(data);
                        tempAry.unshift(reqData); // 把前端给的数据 放到JSON文件中
                        // 把修改后的文件写入文件
                        fs.writeFile('./data.json', JSON.stringify(tempAry), 'utf-8', (err) => {
                            if (err) {
                                obj.errorCode = 5; // 后端操作失败
                                res.end(JSON.stringify(obj));
                                return;
                            }

                            res.end(JSON.stringify(obj)); // 成功 直接返回一个 errorCode:0 即可
                        })
                    })
                } else {
                    // 有id 就是修改数据
                    fs.readFile('./data.json','utf-8',(err,data)=> {
                        if(err) {
                            res.end('error');
                            return;
                        }
                        let tempAry = JSON.parse(data);
                        // 找到对应id的那条数据 然后修改
                        // reqData.id
                        tempAry = tempAry.map(item => {
                            if(item.id === reqData.id) {
                                // id 若相等 就返回前端 传过来的数据
                                // 否则返回原始数组的值
                                return reqData;
                            } 

                            return item;
                        });

                        fs.writeFile('./data.json', JSON.stringify(tempAry), 'utf-8', (err)=> {
                            if(err) {
                                res.end('error');
                                return;
                            }
                            res.end(JSON.stringify(obj)); // 改写成功 返回errorCode: 0 
                        })

                    })
                }
                // console.log(dataStr.toString());
                // res.end('666');
            })

            break;

        default:
            // 上边的路径都不满足的情况下 我们返给前端 404 错误
            res.statusCode = 404;
            res.end();
            break;
    }
    // res.end('hello');

}).listen('9000', function () {
    console.log('服务起于9000');
})