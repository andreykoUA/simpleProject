"use strict";
// for of method has ability to use "break/continue" and forEach can`t
// pseudoarray doesn`t have methods, it only used for storing data
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // reference to obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // surface copy 

newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // clone object with assign method

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];

const newArr = oldArr.slice();

newArr[1] = 'adq';
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'tiktok'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'twitter']; // spread operator

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);
//=======================

const array = ['a', 'b'];

const newAarray = [...array]; // copy with spread operator

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};