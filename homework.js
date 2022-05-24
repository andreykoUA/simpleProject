"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return console.log('Error not a string');
    }
    //==========================================
    // let res = [];
    // for (let i = 0; i <= str.length; i++) {
    //     let temp = str[str.length - 1 - i];
    //     res[str.length - 1 - i] = str[i];
    //     res[i] = temp;
    // }
    // console.log(res.join(''));
    //======================================
    // return str.split('').reverse().join('');
    //=======================================
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    console.log(res);
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0) {
        str = 'There`s no available currencies';
        // } else {
        //     str = 'Available currencies:\n';
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr[i] === missingCurr) continue;
        //         str += `${arr[i]}\n`
        //     }
        //     console.log(str);
        // }
    } else {
        str = 'Available currencies:\n';
        arr.forEach(function (curr) {
            if (curr !== missingCurr) {
                str += `${curr}\n`;
            }
        });
    }
    console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB')