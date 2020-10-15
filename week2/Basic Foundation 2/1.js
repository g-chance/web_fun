function makeBig(arr) {
    for(i=0;i<arr.length;i++) {
        if(arr[i]>0) {
            arr[i] = "Big";
        }
    }
    return arr;
}
console.log(makeBig([1,-1,2,-5]));