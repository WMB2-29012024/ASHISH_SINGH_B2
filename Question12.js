// Branch Name: B2_W4_D5
      
/* Question 12: Write a for loop to log elements not equal to "apple"
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

for(let i = 0; i<strArr.length; i++){
    if(strArr[i] !== "apple") {
        console.log(strArr[i]);
    }
}