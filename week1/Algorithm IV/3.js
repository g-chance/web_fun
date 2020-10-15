// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNeg(arr) {
    for(i=0;i<arr.length;i++) {
        if(arr[i]<0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
replaceNeg([-1,5,"coding",-6])