function factorial(num) {
    var sum = 1;
    for(i=1;i<=num;i++) {
        sum *= i
    }
    console.log(sum);
}
factorial(3);