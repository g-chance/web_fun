// My first program!

function primeNumbers(x) {
    var arr = [];
    for(var i = 2;i<=x;i++) {
        var sum = 0;
        for(var j = 1; j<=i; j++) {
            if(i%j === 0) {
                sum += 1;
            }
        }
        if(sum <= 2) {
        //    console.log(i);
            arr.push(i);
        }
    }
    return(arr);
}
 var y = primeNumbers(1000);
 console.log(y);