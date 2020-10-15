function returnArrOdd(x) {
    var arr = [];
    for(i=0;i<x;i++) {
        if(i%2 === 1) {
            arr.push(i)
        }
    }
    return arr;
}
console.log(returnArrOdd(50));