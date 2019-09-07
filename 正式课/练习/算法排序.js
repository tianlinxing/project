// 冒泡排序
// 思想：当前项和后一项进行比较 如果当前项大于后一项则 交换位置
function bubbleSort(arr) {
    for(var i = 0; i<arr.length-1; i++) {
        for(var j = 0; j < arr.length-1-i; j++) {
            var num = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }

        }
    }
    return arr;
}

let arr = [12,25,14,32,1,5];
console.log(bubbleSort(arr));

