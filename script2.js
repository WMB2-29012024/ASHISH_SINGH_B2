


const s = 'LOVELY';

const stringLowerCase = (inputString) => {
    let str = '';

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <=90) {
            str = str + String.fromCharCode(inputString.charCodeAt(i) + 32);
        }else{
            str += inputString[i]
        }
    }

    return str;
}
console.log(stringLowerCase(s));