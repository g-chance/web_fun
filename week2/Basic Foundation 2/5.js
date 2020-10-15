function countPos(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++) {
        if(arr[i]>=0) {
            sum += 1;
        }
    }
    arr.pop();
    arr.push(sum);
    return arr;
}
console.log(countPos([1,-4,3,5,-2,6]));