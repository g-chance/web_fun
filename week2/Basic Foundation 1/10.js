function NoNegatives(arr) {
    for(i=0;i<arr.length;i++) {
        if(arr[i]<0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(NoNegatives([1,-1,2,-2]));