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

for (let i = 0; i < numberOfAskedQuestions; i++) {
    const lastWatchedMovie = prompt('One of the last watched movies ?', '');
    const rateMovie = prompt('Give rating to that movie ?', '');

    if (lastWatchedMovie != null && rateMovie != null && lastWatchedMovie != '' &&
        rateMovie != '' && lastWatchedMovie.length < 50) {
        personalMovieDB.movies[lastWatchedMovie] = rateMovie;
        console.log("success");
    } else {
        console.log('Error');
        i--;
    }
}

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