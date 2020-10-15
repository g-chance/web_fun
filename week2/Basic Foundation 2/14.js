function scaleArr(arr,x) {
    for(var i=0;i<arr.length;i++) {
        arr[i] **= x;
    }
    return arr;
}
console.log(scaleArr([1,2,3],3));