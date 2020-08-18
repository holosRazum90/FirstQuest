const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 1; i <= 2; i++) {
    let a = prompt("один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько бы вы его оценили?", "");
    if( a != null && b != null && a != "" && b != "" && a.length <= 50 && b.length <= 50){
        personalMovieDB.movies[a] = b;
    } else {
        i--;
        continue;
    }
}

console.log(personalMovieDB);
personalMovieDB.count < 10 ? console.log("Просмотрено довольно мало фильмов") :
personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ?
console.log("Вы классический зритель") : personalMovieDB.count > 30 ? 
console.log("Вы киноман") : console.log("Error");

