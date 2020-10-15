function alwaysHungry(arr) {
    var sum = 0
    for(var i=0;i<arr.length;i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            sum+=1
        }
    }
    if(sum===0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([1,1,1,1,1,1])