function onlyNegatives(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i]>0) {
            arr[i] *= -1;
        }
    }
    return arr;
}
console.log(onlyNegatives([1,2,-1,-4,4]));