"use strict";
// for of method has ability to use "break/continue" and forEach can`t
// pseudoarray doesn`t have methods, it only used for storing data
const arr = [1, 21, 43, 26, 8];
arr.sort(compareNum); // method sort uses quick sort algorithm
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// };

const str = prompt('', '');
const products = str.split(', '); // created array
products.sort();
console.log(products.join('; '));