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

let myFunc = function () {
    const lastWatchedMovie = prompt('One of the last watched movies ?', '');
    const rateMovie = prompt('Give rating to that movie ?', '');
    personalMovieDB.movies[lastWatchedMovie] = rateMovie;
};

for (let i = 0; i < numberOfAskedQuestions; i++) {
    // const lastWatchedMovie = prompt('One of the last watched movies ?', '');
    // const rateMovie = prompt('Give rating to that movie ?', '');
    // personalMovieDB['movies'][lastWatchedMovie] = rateMovie;
    myFunc();
};

console.log(personalMovieDB);