const findUniqueCharacter = (inputString) => {
let obj = {};
for (let i = 0; i <s.length; i++){
    constCurrentLetter = s[i];
    if (!obj[currentLetter]) {
        obj[currentLetter] = 1;
    }else {
        obj[currentLetter] += 1;
    }
}
for (let j = 0; j <s.length; j++) {
    if(obj[s[j]] === 1) {
        return j;
    }
} 
};