"use strict";

const numberOfFilms = +prompt('How many films have you seen ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const numberOfAskedQuestions = 2;

// let myFunc = function () {
//     const lastWatchedMovie = prompt('One of the last watched movies ?', '');
//     const rateMovie = prompt('Give rating to that movie ?', '');
//     personalMovieDB.movies[lastWatchedMovie] = rateMovie;
// };

// for (let i = 0; i < numberOfAskedQuestions; i++) {
//     const lastWatchedMovie = prompt('One of the last watched movies ?', '');
//     const rateMovie = prompt('Give rating to that movie ?', '');

//     if (lastWatchedMovie != null && rateMovie != null && lastWatchedMovie != '' &&
//         rateMovie != '' && lastWatchedMovie.length < 50) {
//         personalMovieDB.movies[lastWatchedMovie] = rateMovie;
//         console.log("success");
//     } else {
//         console.log('Error');
//         i--;
//     }
// };
let i = 0;
// while (i < numberOfAskedQuestions) {
//     i++;
//     const lastWatchedMovie = prompt('One of the last watched movies ?', ''),
//         rateMovie = prompt('Give rating to that movie ?', '');

//     if (lastWatchedMovie != null && rateMovie != null && lastWatchedMovie != '' &&
//         rateMovie != '' && lastWatchedMovie.length < 50) {
//         personalMovieDB.movies[lastWatchedMovie] = rateMovie;
//         console.log("success");
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

do {
    i++;
    const lastWatchedMovie = prompt('One of the last watched movies ?', ''),
        rateMovie = prompt('Give rating to that movie ?', '');

    if (lastWatchedMovie != null && rateMovie != null && lastWatchedMovie != '' &&
        rateMovie != '' && lastWatchedMovie.length < 50) {
        personalMovieDB.movies[lastWatchedMovie] = rateMovie;
        console.log("success");
    } else {
        console.log('Error');
        i--;
    }
}
while (i < numberOfAskedQuestions)

if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
} else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Сталася помилка');
}

console.log(personalMovieDB.movies);
//=================================================



const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += '*';
    }

    result += '\n';
}
console.log(result);

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