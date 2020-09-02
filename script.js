const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    
        while(personalMovieDB.count  == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
        }
    },
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
        personalMovieDB.genres.forEach((value, ind) => console.log(`Любимый жанр №${ind + 1} это ${value}`));
    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
personalMovieDB.start();
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


      