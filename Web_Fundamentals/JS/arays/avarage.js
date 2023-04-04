function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i = 0; i < arr.length; i++) {
        sum+=i;
    }
    sum=sum/arr.length-1;
    var count = 0
    // count how many values are greated than the average
    for (let i = 0; i < arr.length; i++) {
        if (i>sum) {
            count++
        }
        
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
