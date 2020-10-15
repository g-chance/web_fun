function MaxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(i=0;i<arr.length;i++) {
        if(max<arr[i]) {
            max = arr[i];
        }
        if(min>arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }
    var newArr = [];
    newArr.push(max,min,sum/arr.length);
    return newArr;
}
console.log(MaxMinAvg([1,5,4,8,9,5]));