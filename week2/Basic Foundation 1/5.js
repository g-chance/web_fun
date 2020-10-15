function findMax(arr) {
    max = arr[0];
    for(i=0;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,5,8,4]));