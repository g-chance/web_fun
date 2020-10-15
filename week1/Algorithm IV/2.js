// Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i=0;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max,min,sum/arr.length);
}
maxMinAvg([1,2,5,4,2]);