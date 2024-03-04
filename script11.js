
const countOfUniqueElements = (nums) => {
    let uniqueIndex = 1;
    for (let i = 1; i< nums.length-1; i++) {
        if(nums[i] !==nums[i-1]){
            nums[uniqueIndex]= nums[i];
            uniqueIndex++;
        }
    }
    return uniqueIndex;
}