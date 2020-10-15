function nthFromLast(arr,n) {
    if(arr.length - n < 0) {
        return null;
    }
    else {
        return arr[arr.length-n];
    }
}
console.log(nthFromLast([1,2,3,4,5],5));