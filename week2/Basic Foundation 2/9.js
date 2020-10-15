function addSeven(arr) {
    var arrNew = [];
    for(i=0;i<arr.length;i++) {
        var temp = arr[i];
        temp += 7;
        arrNew.push(temp);
    }
    console.log(arr);
    return arrNew;
}
console.log(addSeven([1,2,3,4]))