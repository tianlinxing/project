let fs = require('fs');
// 路径 编码格式 回调函数 比 writeFile 少了一个写入的内容
// fs.readFile('../../git.html', 'utf-8', (err, data) => {
//     // data 就是我们读取到的内容
//     if (err) {
//         console.log('读取失败');
//         return;
//     }
//     console.log('读取成功');
//     console.log(data);
//     // 把读到的内容 写入到 test 文件夹中的一个2.html中
//     fs.writeFile('./test/3.html', data, 'utf-8', (err) => {
//         if (err) {
//             console.log('写入失败');
//             return;
//         }
//         console.log('写入成功');
//     })

// });

// let data = fs.readFileSync('./fs.js','utf-8');
// let res = fs.writeFileSync('./test/1.js',data,'utf-8');
// console.log(res);

// 把test中的文件 写一份 放到test2 中
fs.readdir('./test', (err, ary) => {
    if (err) {
        console.log('读取失败');
        return;
    }

    ary.forEach(item => {
        console.log(item);
        fs.readFile(`./test/${item}`, 'utf-8', (err, data) => {
            if (err) {
                console.log('读取文件失败');
                return;
            }
            fs.writeFile(`./test2/${item}`, data, 'utf-8', (err) => {
                if (err) {
                    console.log('写入失败');
                    return;
                }
                console.log('写入成功');

            });


        })

    });
});


