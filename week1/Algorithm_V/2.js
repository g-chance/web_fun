function moveForward(arr) {
    arr.push(0);
    for(i=0;i<arr.length-1;i++) {
        arr[i] = arr[i+1]
    }
    arr.pop();
    return arr;
}
console.log(moveForward([1,2,3]))