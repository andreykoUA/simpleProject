"use strict";

// const numberOfFilms = +prompt('How many films have you seen ?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const numberOfAskedQuestions = 2;

// let myFunc = function () {
//     const lastWatchedMovie = prompt('One of the last watched movies ?', '');
//     const rateMovie = prompt('Give rating to that movie ?', '');
//     personalMovieDB.movies[lastWatchedMovie] = rateMovie;
// };

// for (let i = 0; i < numberOfAskedQuestions; i++) {
//     // const lastWatchedMovie = prompt('One of the last watched movies ?', '');
//     // const rateMovie = prompt('Give rating to that movie ?', '');
//     // personalMovieDB['movies'][lastWatchedMovie] = rateMovie;
//     myFunc();
// };

// console.log(personalMovieDB);

//====================================

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    };
};

// console.log(NaN || 2 || undefined); // 2
// console.log(NaN && 2 && undefined); // NaN
// console.log(1 && 2 && 3); // 3
// console.log(!1 && 2 || !3); // false
// console.log(25 || null && !3); // 25
// console.log(NaN || null || !3 || undefined || 5); // 5
// console.log(NaN || null && !3 && undefined || 5); // 5
// console.log(5 === 5 && 3 > 1 || 5); // true

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    };

    result += '\n';
};

console.log(result);

//==============================
first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level ${k}`);
        };
    };
};