// Branch Name: B2_W4_D3

//  Question 5: Write a for-loop to log every alternate element, starting from last index.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function num(arr) {
    let finalTuple = [];
    for(i=0; i <=arr.length-1; i++) {
        let singleTuple = []
        if(i===0) singleTuple.push(arr[i])
        else if(i===arr.length-1)singleTuple.push(arr[i])
    else{
        singleTuple.push(arr[i])
        singleTuple.push(arr[i-1])
    }
    finalTuple.push(singleTuple)
    }
    return finalTuple;
}
console.log(num(numArr));