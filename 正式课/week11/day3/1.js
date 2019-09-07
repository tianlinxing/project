let $ = require('zepto');
console.log($);


console.log(global);
console.log('文件夹',__dirname); // 当前文件所在文件夹的绝对路径
console.log('文件',__filename); // 当前文件的绝对路径
var  obj = {
    name: 123
}

var ary = [12,14,2,4,5];
module.exports = {
    obj
} 

/* 
    (function(__dirname, __filename, exports, module, require) {

    })()
*/