function Fib(n) {
    if(n==0 || n==1) {
        return n
    }
    return(Fin(n-2)+Fib(n-1));
}
Fib(5);