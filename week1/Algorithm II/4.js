function largestElement(x) {
    var temp = x[0];
      for(var i = 0;i < x.length; i++) {
        if(x[i] > temp) {
            temp = x[i]; 
        }
    }
    console.log(temp);
    return temp;
}
largestElement([41,30,35,37]);