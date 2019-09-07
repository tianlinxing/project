/**
 * node js的运行环境, 异步单线程 I/O 指input 和output
 * 我们可以使用node执行JS代码; 命令：node js文件名
 * npm init -y 把文件夹初始化成node项目 文件夹名字不能含有中文
 * npm i xxx --save-dev 把安装的包放到 devDependencies中
 * npm i xxx --save 把安装的包放到 dependencies中
 * npm i less --save
 * require 导入
 * exports/module.exports
 * 
 * es6 导入导出 import export
 * node 导入导出 require exports
 * 
 * node的模块分为三类 
 * 自定义模块  引入时需要加上路径 require('./1.js');
 * 第三方模块  通过 npm 下载下来的 requier('jquery')
 * 内置模块 node自带的一些模块 require('path');
 */



// 在这个js文件中使用 求和 和求平均函数
// let utils = require('./1.js');
let tools = require('./2.js');
console.log(tools.ave(2, 3, 4, 5, 6));
console.log(tools.sum(1, 2));
// 每一个文件都是一个单独的作用域
// console.log(global); // 全局变量是 global; 不是window了
global.process.env.base_url = '/hello'
// console.log(global.process.env);
console.log(__dirname); // 当前文件所在文件夹的绝对路径
console.log(__filename); // 当前文件的绝对路径


// node 处理JS文件时 我们把每个JS文件理解成一个大的自执行函数即可
/*
(function (__dirname, __filename, exports, module, require) {
    // 在这个js文件中使用 求和 和求平均函数
    // let utils = require('./1.js');
    let tools = require('./2.js');
    console.log(tools.ave(2, 3, 4, 5, 6));
    console.log(tools.sum(1, 2));
})()
 */
