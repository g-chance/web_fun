function evensAndOdds(arr) {
    var odd = 0;
    var even = 0;
    for(i=0;i<arr.length;i++) {
        if(arr[i]%2 === 1) {
            even = 0;
            odd += 1;
            if(odd%3 === 0) {
                console.log("That's odd")
            }
        }
        else {
            odd = 0;
            even += 1;
            if(even%3 === 0) {
                console.log("Even More So!");
            }
        }
    }
}
evensAndOdds([1,1,1,1,2,1,1,2,2,2,2,2,2,2,1]);