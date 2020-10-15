function SqVals(arr) {
    for(i=0;i<arr.length;i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(SqVals([1,2,3,4]));