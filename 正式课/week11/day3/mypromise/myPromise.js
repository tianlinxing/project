// promise是用来管理异步操作的
// promise有三种状态 pending(进行中)、fulfilled(已成功)、rejected(已失败)
// 当我们 new 一个promise的时候就已经变成pending状态，成功和失败态只能出现一个状态
// class Promise {
//     // 传一个回调函数
//     // 内置Promise 当我们new 一个Promise就相当于把回调函数执行
//     constructor(executor) {
//         this.status = 'pending';
//         this.value = undefined;
//         // 执行executor
//         let resolveFn = result => {
//             if (this.status !== 'pending') return;
//             this.status = 'fulfilled';
//             this.value = result;
//         }

//         let rejectFn = reason => {
//             if (this.status !== 'pending') return;
//             this.status = 'reject';
//             this.value = reason;
//         }
//         executor(resolveFn, rejectFn);
//     }
// }

// module.exports = Promise;

import { arr } from './test.js';
// console.log(arr);
console.log(Array == arr.constructor);