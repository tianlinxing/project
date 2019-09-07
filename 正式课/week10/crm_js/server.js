let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');

let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);

    let { pathname, query } = urlObj;
    // 静态资源服务
    if (pathname === '/' || /(\.\w+)$/.test(pathname)) {
        let filePath = '';
        let contentType = '';

        if (pathname === '/') {
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        } else {
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname)
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end(`${pathname} is not found`)
            } else {
                res.end(data);
            }
        })
    } else {
        // 处理ajax接口
        res.setHeader('Content-Type', 'application/json;charset=UTF-8;');
        let database = __dirname + '/database/custom.json'; // 数据文件路径
        let response = {
            code: 0,
            data: null,
            msg: 'ok'
        };

        // 获取列表
        if (pathname === '/api/getList') {
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));
            response.data = con;
            res.end(JSON.stringify(response)); // 服务端不能直接把对象直接响应去，需要对象转成json格式的字符串；
        }

        // 2. 删除数据
        if (pathname === '/api/removeInfo') {
            let arr = JSON.parse(fs.readFileSync(database, 'utf8'));
            let result = arr.find(item => +item.id === +query.id);
            if (result) {
                arr = arr.filter(item => +item.id !== +query.id);
                fs.writeFileSync(database, JSON.stringify(arr));
                res.end(JSON.stringify(response));
            } else {
                response.code = 1;
                response.msg = `id为${query.id}的客户不存在`;
                res.end(JSON.stringify(response))
            }
        }

        // 3. 新增客户
        if (pathname === '/api/addInfo') {
            // 接收客户端post过来的数据
            // 如何接收POST的数据呢？
            // POST的请求数据量一般比较大，客户端会把数据切段，然后一段一段的传过来，每传过来一次就会触发一次data事件，当最后一段发送完会触发一次end事件
            let str = '';
            req.on('data', (chunk) => {
                // 监听data事件，接收数据
                str += chunk;
            });
            req.on('end', () => {
                let curCustom = JSON.parse(str);

                // 先读取出来，然后写入；
                let con = JSON.parse(fs.readFileSync(database, 'utf8'));
                // 为新增的数据生成一个id，如果之前的数据为空，那么这个id为1，如果不为空，那么这个id应该为数据的之前最后一条数据的id + 1
                con.length
                    ? curCustom.id = con[con.length - 1].id + 1
                    : curCustom.id = 1;
                con.push(curCustom);
                fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                res.end(JSON.stringify(response));
            })
        }

        // 4. 获取某个客户的信息
        if (pathname === '/api/getInfo') {
            // 根据客户端传递的id，从数据库中查出指定id的用户的信息
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));
            let result = con.find(item => +item.id === +query.id);
            if (result) {
                response.data = result;
                res.end(JSON.stringify(response))
            } else {
                response.code = 1;
                response.msg = `id为${query.id}的用户不存在`;
                res.end(JSON.stringify(response))
            }
        }

        // 5. 修改客户信息
        if (pathname === '/api/updateInfo') {
            let str = '';
            req.on('data', (chunk) => str += chunk);
            req.on('end', () => {
                let curData = JSON.parse(str);
                let con = JSON.parse(fs.readFileSync(database, 'utf8'));
                let curIndex = con.findIndex(item => +item.id === +curData.id);
                console.log(curIndex);
                if (curIndex > -1) {
                    con[curIndex] = curData;
                    fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                    res.end(JSON.stringify(response))
                } else {
                    response.code = 1;
                    response.msg = `id为${curData.id}用户不存在`;
                    res.end(JSON.stringify(response));
                }
            })
        }
    }
});

server.listen(8001, () => console.log('port 8001 is on'));