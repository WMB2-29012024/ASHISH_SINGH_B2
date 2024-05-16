const pTag = document.getElementById("p-tag")

const num1 = [10, 5, 20, 8 , 15];
const result = largestElement(num1);

function largestElement(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
console.log("The largest element in the array is:" + result); 

