const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const movie1 = prompt("один из последних просмотренных фильмов?", "");
// const ocen1 = prompt("На сколько бы вы его оценили?", "");
// const movie2 = prompt("один из последних просмотренных фильмов?", "");
// const ocen2 = prompt("На сколько бы вы его оценили?", "");
for(let i = 1; i <= 2; i++) {
    let a = prompt("один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько бы вы его оценили?", "");
        if(a === null){
            i = i - 1;
            continue;
        } else if(b === null){
            i = i - 1;
            continue;
        } else if(a === ""){
            i = i - 1;
            continue;
        } else if(b === ""){
            i = i - 1;
            continue;
        } else if(a.length >= 50){
            i = i - 1;
            continue;
        } else if(b.length >= 50){
            i = i - 1;
            continue;
        }
            
    personalMovieDB.movies[a] = b;
}
// personalMovieDB.movies[movie1] = ocen1;
// personalMovieDB.movies[movie2] = ocen2;

console.log(personalMovieDB);
