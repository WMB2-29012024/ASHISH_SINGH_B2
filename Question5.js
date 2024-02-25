// Branch Name: B2_W4_D5
      
/* Question 5: Write a for loop to find and log the index of largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let largest = numArr[0];
let largestIndex = 0;
for(let i = 0; i<=numArr.length-1; i++){
if(numArr[i]>largest ){
    largest = numArr[i]
    largestIndex = [i]
}
}
console.log(largestIndex)