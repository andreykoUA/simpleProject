"use strict";

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('hello')
//     }
// };

// const john = Object.create(soldier); // !!!!!!!!!!!!!!!!!!

// const john = {
//     health: 100,

// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier); // !!!!!!!!!!!!!!!!!!!!!!!!!!

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

// function isBudgetEnough(data) {
//     const {
//         shops
//     } = data;
//     let totalSquare = 0;
//     let totalVol = 0;

//     for (let key in shops) { // every obj has key as a number (0, 1, 2, 3)
//         let sumWid = 0;
//         let sumLen = 0;

//         for (let i in shops[key]) { // i stands for width or length 
//             // console.log(`${i}  = ${shops[key][i]}`);
//             if (i === 'width') {
//                 sumWid += shops[key][i];
//             }
//             if (i === 'length') {
//                 sumLen += shops[key][i];
//             }
//         }
//         totalSquare += sumLen * sumWid;
//         // console.log(`${totalVol} Square of shop ${1 + +key}: ${sumWid * sumLen}`); // separate square for each shop object
//     }
//     totalVol += totalSquare * data.height;
//     // console.log(`Total square: ${totalSquare}`);
//     // console.log(`Total volume: ${totalVol}`);
//     // console.log(totalVol * shoppingMallData.moneyPer1m3);
//     if (data.budget >= (totalVol * data.moneyPer1m3)) {
//         return console.log('Budget is enough');
//     } else {
//         return console.log('Not enough budget');
//     }
// }

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