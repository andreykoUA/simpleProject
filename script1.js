/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you seen ?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen ?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastWatchedMovie = prompt('One of the last watched movies ?', '').trim();
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто доволі мало фільмів');
        } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) {
            console.log('Ви класичний глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Сталася помилка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        // personalMovieDB.privat = !personalMovieDB.privat;
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const favouriteGenre = prompt(`Your favorite genre number ${i + 1}`, '');
            if (favouriteGenre === '' || favouriteGenre === null) {
                console.log("Error, incorect data");
                i--;
            } else {
                personalMovieDB.genres[i] = favouriteGenre;
            }

            // let favouriteGenre = prompt(`Enter your favourite genres with comma`, ''); // with this for ( i = 1; i < 2)
            // if (favouriteGenre === '' || favouriteGenre === null) {
            //     console.log("Error, incorect data");
            //     i--;
            // } else {
            //     personalMovieDB.genres = favouriteGenre.split(', ');
            // }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre #${i + 1} is ${item}`);
        });
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();


// console.log(personalMovieDB);