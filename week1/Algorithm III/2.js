function returnOddArray(arr){
    for(var i = 1; i <= 255; i++) {
        if(i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
 y = returnOddArray([]);
 console.log(y); // should log [1,3,5,...,253,255]