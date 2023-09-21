
function sumRange(arr){

    // Initailize total sum to zero
    let sum = 0;

    // Define the max and min value in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Calculate total value in the array range using for
    for (let i = min; i <= max; i ++){
        sum += i;
    }
return sum
    
}

console.log(sumRange([3,4]))