/**
 * 写一个函数, 输入一个数组 a,找到里面是否存在三个不同的元素 ,使得a[i] + a[j] == a[k].
 * 如果能找到输出true, 找不到输出 false
 * 举例： 
 * 输入 var a1 = [1, 5, 10, 25, 9, 17, 100], 输出false
 * 输入 var a2 = [2, 99, 3, 5] 可以找到 2 + 3 = 5,因此输出true
 * 输入 var a3 = [1, 50, 0, 5] 输出false
 */

const a1 = [1, 2, 10, 25, 9, 17, 100]
const a2 = [2, 99, 3, 5, 3]
const a3 = [1, 50, 0, 5]

function isBool(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            
            let idx = arr.indexOf(arr[i] + arr[j], j + 1)
            if (idx > -1) {
                return true
            }
        }
    }
    return false
}
// console.log(isBool(a1)) // false
console.log(isBool(a2)) // true
// console.log(isBool(a3)) // false