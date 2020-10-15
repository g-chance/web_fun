function secondLgst(arr) {
    var max = arr[0];
    var max2 = arr[0];
    for(var i=0;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    for(var i=0;i<arr.length;i++) {
        if(max2 == max) {
            max2 = arr[i]; 
        }
        else if(max2 < arr[i] && arr[i] != max) {
                max2 = arr[i];
        }
    }
    return max2;
}
console.log(secondLgst([9,4,5,7]));