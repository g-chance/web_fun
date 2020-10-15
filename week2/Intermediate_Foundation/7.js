function doubleTrouble(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++) {
        newArr.push(arr[i],arr[i]);
    }
    console.log(newArr)
}
doubleTrouble([1,"dojo",2]);