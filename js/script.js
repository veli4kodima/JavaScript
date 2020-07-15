"use strict";
let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов которые Вы посмотрели?', ''),
      b = prompt('На сколько его оцените?',''),
      c = prompt('Один из последних фильмов которые Вы посмотрели?',''),
      d = prompt('На сколько его оцените?','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);