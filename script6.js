const num1 = 10;
const num2 = 10;

const countOperation = (num1, num2) => {
    let count = 0;

    while (num1 > 0 && num2 > 0) {
        if (num1>= num2)  {
            num = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
        count++;
    }
    return count;
};

console.log(countOperation(num1, num2));