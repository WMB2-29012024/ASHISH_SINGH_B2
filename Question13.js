// Branch Name: B2_W4_D3
//  Question 13: Write a for-loop:
// - Start from 0th index, log every element,
// - then go to next index, log all next elements,
// - continue till last element   

const array = [1, 2, 3, 4, 5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        console.log(array[j]);
    }
}
