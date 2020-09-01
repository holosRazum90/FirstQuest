let numberOfFilms;

function start() {
    numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);

    while(numberOfFilms  == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
    personalMovieDB.count < 10 ? console.log("Просмотрено довольно мало фильмов") :
    personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ?
    console.log("Вы классический зритель") : personalMovieDB.count > 30 ? 
    console.log("Вы киноман") : console.log("Error");
   
}
detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
    }
}
writeYourGenres();

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}!`);
//     callback();
// }
// function youp(){
//     console.log(`было просто!`);
// }

// learnJS('JavaScript', youp);

const Obj = {
    a: 12,
    b: 14,
    c: {
        d: 2,
        e: 3
    }
};

function copying(mainObj) {
    let copyObj = {};

    let key;
    for(key in mainObj) {
        if(typeof(key) == 'object') {
            console.log(`object ${key}`);
            let key2;
            for(key2 in key) {
                copyObj[key][key2] = mainObj[key][key2];
            }
        } else {
        copyObj[key] = mainObj[key];
        }
        
    }
    return copyObj;
}
const copy = copying(Obj);

copy.a = 13;
copy.c.d = 5;
console.log(Obj);
console.log(copy);

const vid = ['df', 'af', 'ht'],
      fdo = ['ssg', 'gsg', 'hth'],
      inter = [... vid, ...fdo, 'wefw', 'sfgg'];

console.log(inter);

      