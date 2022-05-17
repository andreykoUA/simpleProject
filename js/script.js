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
//=================================================

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }

}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i > 9; i--) {
        if (i === 13) break;
        console.log(i);
    }

}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = 5; i <= 10; i++) {

        arrayOfNumbers[j] = i;
        j++;
    }
    // Не трогаем
    return arrayOfNumbers;
}