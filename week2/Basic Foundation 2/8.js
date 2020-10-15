function prevLengths(arr) {
    for(i=arr.length-1;i>0;i--) {
        var sum = 0;
        for(j=0;j<arr[i-1].length;j++) {
            sum += 1;
        }
        arr[i] = sum;
    }
    return arr;
}
console.log(prevLengths(["hello", "dojo", "awesome"]));