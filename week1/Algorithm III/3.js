function squareValue(x){
    for(var i=0;i<x.length;i++) {
        var temp = x[i]*x[i];
        x[i] = temp;
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]