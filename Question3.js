// Branch Name: B2_W4_D5
      
/* Question 3: Write a for loop to find and log the largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];
let largest = numArr[0];
for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > largest) {
        largest = numArr[i];
    }
}
console.log(largest);
