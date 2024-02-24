// Branch Name: B2_W4_D3

//  Question 12: Write a for-loop to log every element, starting from middle of the array

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function midleft(arr){
    // if(arr.length %2 === 0){
        for(let i=Math.round(arr.length/2); i<arr.length;i++){
             console.log(arr[i]);
        }
    // }

}
const arr= [1,2,3,4,5,6,7,8,9,10,11];
midleft(arr);