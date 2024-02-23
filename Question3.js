// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

const strArr = "asdasdzxczxc";
function invertString(str) {
    let reversedString = ""
    for(let idx = strArr.length-1; idx>=0; idx-=1){
        reversedString = reversedString +str[idx]
    }
    return reversedString
}
console.log(invertString(strArr))