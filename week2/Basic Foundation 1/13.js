function theDojo(arr) {
    for(i=0;i<arr.length;i++) {
        if(arr[i]<0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(theDojo([1,-2,3,-4]))