function calculateLetterGrade(numericalGrade) {
    if (numericalGrade >= 90 && numericalGrade <= 100) {
        return 'A';
    } else if (numericalGrade >= 80 && numericalGrade < 90) {
        return 'B';
    } else if (numericalGrade >= 70 && numericalGrade < 80) {
        return 'C';
    } else if (numericalGrade >= 60 && numericalGrade < 70) {
        return 'D';
    } else if (numericalGrade >= 0 && numericalGrade < 60) {
        return 'F';
    } else {
        return 'Invalid grade'; 
    }
}


console.log(calculateLetterGrade(95)); // Output: A
console.log(calculateLetterGrade(85)); // Output: B
console.log(calculateLetterGrade(75)); // Output: C
console.log(calculateLetterGrade(65)); // Output: D
console.log(calculateLetterGrade(55)); // Output: F

