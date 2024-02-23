// Branch Name: B2_W4_D3

//  Question 1: Write a for loop and log each element, starting from 0th index.

const numArr = [1, 234_45, 89,75, 4e9]
const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]

for(i=0; i<numArr.length-1; i=i+1){
    console.log(numArr[i])
}

for(i=0; i<strArr.length-1; i=i+1) {
    console.log(strArr[i])
}

for(i=0; i<mixArr.length-1; i= i+1){
    console.log(mixArr[i])
}

