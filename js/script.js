"use strict";

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 1); //2
// pow(2, 2); //4
// pow(2, 3); //8
// pow(2, 4); //16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }

    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) { // recursion base  // checking if structure is an array 
        let total = 0;

        for (let i = 0; i < data.length; i++) { // from array of objects extract progress value and sum them
            total += data[i].progress;
        }

        return [total, data.length]; // total is a progress of all students in array; data.length number of students
    } else { // recursion part is below and repeating until meets the recursion base conditions
        let total = [0, 0];

        for (let subData of Object.values(data)) { // getting vaules of the object (key: value)
            const subDataArray = getTotalProgressByRecursion(subData); // to value calling recursion hence the result will be array
            total[0] += subDataArray[0]; // total progress
            total[1] += subDataArray[1]; // amount of students
        }

        return total; // returning array with 2 elements
    }
}

const result = getTotalProgressByRecursion(students); // result is an array with 2 elements
// console.log(result[0] / result[1]);

function factorial(num) {
    if (typeof (num) !== 'number' || !Number.isInteger(num)) {
        return console.log("Only integer numbers!");
    }
    if (num >= 1) { // base of recursion
        return num * factorial(num - 1);
    } else {
        return 1;
    }

}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-5));
console.log(factorial(5.5));