function swapVals(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log(swapVals([2,5,7]));