function GreaterY(arr,y) {
    var sum = 0
    for(i=0;i<arr.length;i++) {
        if(arr[i]>y) {
            sum += 1;
        }
    }
    return sum;
}
console.log(GreaterY([2,5,7,5],2));