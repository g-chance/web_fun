function doubleArr(arr) {
    var newArr = [];
    for(i=0;i<arr.length;i++) {
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
console.log(doubleArr([1,2,3]));