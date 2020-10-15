function sumOdd(x) {
    var sum = 0;
    for(i=0;i<=x;i++) {
        if(i%2 === 1) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOdd(1000));