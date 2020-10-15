// Print One, Return Another - Build a function that takes in an array of numbers.
// The function should print the second-to-last value in the array, and return the first odd value in the array.

function Pr1RtAn(arr) {
    console.log(arr[arr.length-2]);
    for(i=0;i<arr.length;i++) {
        if(arr[i]%2 == 1) {
        return arr[i];
        }
    }
}
console.log(Pr1RtAn([2,4,7,5,5]));