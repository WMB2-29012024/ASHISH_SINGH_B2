const compareStrings = (word1, word2) => {
let str1 = '';

for(let i = o; i<word1.length; i++){
    str1 += word1[i];
}
let str2 = '';
for(let j = 0; j <word2.length; j++){
    str2 +=word2[j]
}
if (str1 === str2) {
    return true;
}else {
    return false;
}
};