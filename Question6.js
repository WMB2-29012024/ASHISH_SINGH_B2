// Branch Name: B2_W4_D5
      
/* Question 6: Write a for loop to find and log the index of smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let smallest = numArr[0];
let smallestIndex = 0;
for(let i = 0; i<=numArr.length-1; i++){
    if(numArr[i]<smallest){
        smallest = numArr[i]
        smallestIndex= [i]
    }
}
console.log(smallestIndex);
