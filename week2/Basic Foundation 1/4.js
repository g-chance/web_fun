function returnSumArr(arr) {
    var sum = 0;
    for (i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(returnSumArr([1,2,3,4]));