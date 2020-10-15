// Given an array and a value Y, count and print the number of array values greater than Y.

function printGreater(arr,y) {
    var sum = 0;
    for(i=0;i<arr.length;i++) {
        if(arr[i] > y) {
            sum += 1;
        }
    }
    console.log(sum)
}
printGreater([1,5,3,7],3)