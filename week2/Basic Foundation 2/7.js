function incrementSeconds(arr) {
    for(var i=1;i<arr.length;i+=2) {
        arr[i] += 1;
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6]));