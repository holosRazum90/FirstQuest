const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const movie1 = prompt("один из последних просмотренных фильмов?", "");
const ocen1 = prompt("На сколько бы вы его оценили?", "");
const movie2 = prompt("один из последних просмотренных фильмов?", "");
const ocen2 = prompt("На сколько бы вы его оценили?", "");