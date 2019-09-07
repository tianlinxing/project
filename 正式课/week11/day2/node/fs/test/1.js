/**
 * fs是node 用来管理文件的一个内置模块
 * 
 * 
 */

let fs = require('fs');
fs.mkdir('./test', (err) => {
    // 创建文件夹
    // 异步
    // 若err存在 就证明 你创建失败了; 反之成功
    if(err) {
        console.log('创建失败');
        return;
    }

    console.log('成功');
});

// let res = fs.mkdirSync('./test2'); // 同步创建文件夹
// console.log(1111,res);
// 读文件夹
fs.readdir('../../node',(err,res) => {
    // 异步
    console.log(err); //若err存在 就证明 你创建失败了; 反之成功
    console.log(res); // 返回一个数组 数组中的项是文件夹中的文件的名字
    
});

let res = fs.readdirSync('../../node'); // 同步
console.log(res);

