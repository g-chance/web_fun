function prLowRtHi(arr) {
    var max = arr[0];
    var min = arr[0];
    for(i=0;i<arr.length;i++) {
        if(max<arr[i]) {
            max = arr[i];
        }
        if(min>arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    return max
}
console.log(prLowRtHi([2,1,8,6]));