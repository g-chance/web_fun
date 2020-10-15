function secondLgst(arr) {
    var max = arr[0];
    for(var i=1;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    for(var i=0;i<arr.length;i++) {
        if(arr[i] == max) {
            arr.splice(i,1);
        }
    }
    max = arr[0];
    for(var i=0;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max)
}
secondLgst([1,2,3,4]);