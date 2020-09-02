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
    privat: false,
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        personalMovieDB.count < 10 ? console.log("Просмотрено довольно мало фильмов") :
        personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ?
        console.log("Вы классический зритель") : personalMovieDB.count > 30 ? 
        console.log("Вы киноман") : console.log("Error");
       
    },
    showMyDB:() => {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:() => {
        for(let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
            while(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
            }
        }
        personalMovieDB.genres.forEach(value => console.log(`Любимый жанр №${this.index} это ${value}`));
    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();


// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}!`);
//     callback();
// }
// function youp(){
//     console.log(`было просто!`);
// }

// learnJS('JavaScript', youp);


      