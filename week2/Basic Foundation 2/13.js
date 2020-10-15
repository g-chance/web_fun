function swapVals(arr) {
    for(var i=0;i<arr.length/2;i+=2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}
swapVals([1,2,3,4,5,6,7]);