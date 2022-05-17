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
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            data[i] *= 2;
        } else if (typeof data[i] === "string") {
            data[i] += ' - done';
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = data.length - 1; i >= 0; i--) {
        result[j] = data[i];
        j++;
    }
    console.log(result);

    // Не трогаем
    return result;
}

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) { // main cycle going throught lines of figure
    for (let j = lines; j >= 0; j--) { // making spaces , with each i cycle spacing is getting smaller
        result += ' ';
        if (j === i) { // when j matches i starting to draw *
            for (let k = 0; k <= i + i; k++) { // drawing * 
                result += '*';
            }
        }
    }
    result += '\n';
}
console.log(result);

//      *
//     *** 
//    *****  
//   *******   
//  *********    
// ***********  

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)