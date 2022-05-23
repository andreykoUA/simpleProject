"use strict";

// function calculateVolumeAndArea(cubeSide) {

//     if (cubeSide < 0 || typeof cubeSide != 'number' || !Number.isInteger(cubeSide)) {
//         return "При вычислении произошла ошибка";

//     }

//     let cubeArea = 6 * Math.pow(cubeSide, 2);
//     let cubeVolume = Math.pow(cubeSide, 3);
//     return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
// }

// calculateVolumeAndArea(15.5);

// function getCoupeNumber(numb) {
//     if (numb < 0 || typeof numb !== 'number' || !Number.isInteger(numb)) {
//         return console.log("Ошибка. Проверьте правильность введенного номера места");
//     }

//     if (numb === 0 || numb > 36) {
//         return console.log("Таких мест в вагоне не существует");
//     }

//     for (let i = 1; i <= 36; i++) {
//         if (i === numb) {
//             return console.log(Math.ceil(numb / 4));
//         }
//     }

// }

// function getTimeFromMinutes(minutes) {
//     if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
//         return console.log("Ошибка, проверьте данные");
//     }

//     let timeInHours = Math.floor(minutes / 60);
//     let timeInMinutes = minutes % 60;
//     let strHours = '';

//     switch (timeInHours) {
//         case 1:
//             strHours = 'час';
//             break;
//         case 2:
//             // strHours = 'часа';
//             // break;
//         case 3:
//             // strHours = 'часа';
//             // break;
//         case 4:
//             strHours = 'часа';
//             break;
//         default:
//             strHours = 'часов';
//     }

//     // if (timeInHours === 1) {
//     //     strHours = 'chas';
//     // } else if (timeInHours === 2 || timeInHours === 3 || timeInHours === 4) {
//     //     strHours = 'chasa';
//     // } else {
//     //     strHours = 'chasov';
//     // }

//     // for (let i = 1; i <= 91; i += 10) {
//     //     if (timeInHours === 11) {
//     //         continue;
//     //     }
//     //     if (timeInHours === i) {
//     //         strHours = 'chas';
//     //     }
//     // }

//     return console.log(`Это ${timeInHours} ${strHours} и ${timeInMinutes} минут`);
// }

// function findMaxNumber(arg1, arg2, arg3, arg4) {
//     let max = 0;
//     for (let i = 0; i < arguments.length; i++) {

//         if (arguments.length !== 4 || typeof (arguments[i]) !== 'number') {
//             return console.log(0);
//         }
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return console.log(max);
//     // console.log(arguments);
// }

// findMaxNumber(1, 24.6, 4, 7);

// function fib(numb) {
//     if (typeof (numb) !== 'number' || numb < 0 || !Number.isInteger(numb)) {
//         return console.log('');
//     }

//     let firstValue = 0;
//     let lastValue = 1;
//     let str = '';

//     for (let i = 0; i < numb; i++) {
//         if (i + 1 === numb) {
//             str += `${firstValue}`;
//         } else {
//             str += `${firstValue} `;
//         }
//         let sum = firstValue + lastValue;
//         firstValue = lastValue;
//         lastValue = sum;

//     }
//     return console.log(str);
// }
// fib(4);


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

options.makeTest();

const {
    border,
    bg
} = options.colors; // destructerization

console.log(border);

// console.log(Object.keys(options).length); // !!!!! number of keys

// delete options.name;

// for (let key in options) {

//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//     }
// }
console.log(counter);