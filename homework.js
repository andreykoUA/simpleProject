"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        console.log('Family is empty');
    } else {
        let str = 'Family includes: ';
        for (let member of arr) {
            str += `${member} `;
        }
        console.log(`${str}`);
    }
    // let str = '';

    // arr.length === 0 ? str = 'Family is empty' : str = 'Family includes: ';

    // arr.forEach(member => {
    //     str += `${member} `
    // });

    // return console.log(str);

}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let city of arr) {
        console.log(city.toLowerCase());
    }
    //     arr.forEach(city => {
    //         console.log(city.toLowerCase());
    //     })
}

standardizeStrings(favoriteCities);