function findAvg(arr) {
    var sum = 0;
    for (i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
}
console.log(findAvg([2,5,3,6]));