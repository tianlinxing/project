// 提供一个求平均数
let obj = require('./1.js');
// var qqq = 123;
function ave(...arg) {
    return eval(arg.join('+')) / arg.length;
}

module.exports = {
    ave,
    sum:obj.sum
}