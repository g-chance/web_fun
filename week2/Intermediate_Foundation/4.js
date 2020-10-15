function secondToLast(arr) {
    if(arr.length<2) {
        return null;
    }
    else {
        return arr[arr.length-2];
    }
}
console.log(secondToLast([1,2,3,4,5]));