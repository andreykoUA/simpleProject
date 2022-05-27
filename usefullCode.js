const numberOfFilms = +prompt('How many films have you seen ?', ''); // + before prompt convert it to Number
console.log(4 + +" 5"); // string becomes int

// closures - замикання
function createCounter() { //1
    let counter = 0; //2
    console.log('before ' + counter);
    const myFunction = function () { //3
        counter = counter + 1; //4
        console.log("inner call " + counter);
        return counter; //5
    }
    return myFunction; //7
}
const increment = createCounter(); //9
const c1 = increment(); //10
const c2 = increment(); //11
const c3 = increment(); //12
console.log('example increment', c1, c2, c3); //13
//==========================================================
for (let i = 0; i < numberOfAskedQuestions; i++) {
    const lastWatchedMovie = prompt('One of the last watched movies ?', '');
    const rateMovie = prompt('Give rating to that movie ?', '');

    if (lastWatchedMovie != null && rateMovie != null && lastWatchedMovie != '' &&
        rateMovie != '' && lastWatchedMovie.length < 50) { // returning to previous question by decrementing counter
        console.log('Error');
        i--;
        console.log('Сталася помилка');
    }
}
//========================================================
if (cubeSide < 0 || typeof cubeSide != 'number' || !Number.isInteger(cubeSide)) { // checking for integer
    return "При вычислении произошла ошибка";
}
//========================================================
switch (timeInHours) { // using different text for value
    case 1:
        strHours = 'час';
        break;
    case 2:
        strHours = 'часа';
        break;
    case 3:
        strHours = 'часа';
        break;
    case 4:
        strHours = 'часа';
        break;
    default:
        strHours = 'часов';
}
//===============================================
function fib(numb) { // fibonacci argument means quantity of fibonacci numbers
    if (typeof (numb) !== 'number' || numb < 0 || !Number.isInteger(numb)) {
        return console.log('');
    } // checking if number fitting

    let firstValue = 0;
    let lastValue = 1;
    let str = '';

    for (let i = 0; i < numb; i++) {
        if (i + 1 === numb) { // we need to print first value before changing it to next one(hence we can print 0 1 at start)
            str += `${firstValue}`; // only on last element we nned value without spaces
        } else {
            str += `${firstValue} `; // else we need value with whitespace after
        }
        let sum = firstValue + lastValue;
        firstValue = lastValue;
        lastValue = sum;

    }
    return console.log(str);
}
fib(4);
//=============================================
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

const {
    border,
    bg
} = options.colors; // destructerization

console.log(border);
for (let key in options) {

    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has value ${options[key]}`);
    }
}
//=============================================
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // surface copy 

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // clone object with assign method

const oldArr = ['a', 'b', 'c'];

const newArr = oldArr.slice();
//=====================================================
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
//===============================\=\
function reverse(str) {
    if (typeof (str) !== 'string') {
        return console.log('Error not a string');
    }
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    console.log(res);
}
//===============================================
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello')
    }
};

const john = Object.create(soldier); // !!!!!!!!!!!!!!!!!!
Object.setPrototypeOf(john, soldier); // !!!!!!!!!!!!!!!!!!!!!!!!!!
//=====================================================
const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.length * shop.width;
    });

    volume = square * data.height;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return console.log('Budget is enough');
    } else {
        return console.log('Budget is not enough');
    }

}
isBudgetEnough(shoppingMallData);
//==========================================
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [],
        b = [],
        c = [],
        left = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return console.log([a, b, c, `Remaining students: ${left.length === 0 ? '-' : left.join(', ')}`]);
}
sortStudentsByGroups(students);
//=============================================================
// let x = 5;
// alert(x++); // 5 
//=
// console.log([] + false - null + true) // NaN(because [] converted to "" and you cant substract from string)
//=
// let y = 1;
// let x = y = 2;
// alert(x); // 2 
//=
// console.log([] + 1 + 2); // 12
// console.log(1 + 2 + []); // 3 because when we have number type [] converts to null
// console.log(1 + 2 + [0]); // depending of index in brackets the digit will be put after 1+2=3 and 0 will be 30
//=
// alert("1" [0]); // 1
// alert("12" [1]); // undefined because [1] represent second symbol in string "1" which has only 1 value(0 index)
//=
// console.log(2 && 1 && null && 0 && undefined); // null
//= 
// Difference between !!(a && b) and(a && b); // false !! convert to boolean and other is number type
// console.log(!!(a && b) === (a && b))
//=       0   ||   3    || 4
// alert(null || 2 && 3 || 4); // 3 ; && return last true if both true; || return first true 
//=
// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a === b); // false
// console.log(a[0] === b[0]); // true
//=
// alert(+"Infinity"); //  Infinity
//=
// console.log("Ёжик" > "яблоко") // false 

//=
// console.log(0 || "" || 2 || undefined || true || false) // 2 
//=

// function createCounter() {
//     let counter = 0;

//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);
//====================================

console.log('14$'.slice(0, -1) > 17)