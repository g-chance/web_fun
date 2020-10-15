// Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function returnVals(arr,x,y) {
    arr.splice(x,y-x+1);
    console.log(arr);
}
returnVals([1,2,3,4,5,6],2,4)