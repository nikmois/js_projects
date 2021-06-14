"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};




for (let i = 1; i <= 2; i++) {
    const firstMovie = prompt("One of the last movies you have watched?", "");
    const firstAnswer = prompt("Give it a raiting", "");
    if (firstMovie != null && firstAnswer != null && firstMovie !='' && firstAnswer !='' && firstMovie.length < 50 && firstAnswer.length <50){
        console.log("done");
        personalMovieDB.movies[firstMovie] = firstAnswer;
    } else{
        console.log("error");
        i--;
    }
    
}


if (personalMovieDB.count < 10){
    console.log("too less");
} else if (10 <= personalMovieDB.count < 30){
    console.log("quite good");
} else if (personalMovieDB.count >= 30){
    console.log("wow, u are real movie lover");
} else {
    console.log('error');
}

console.log(personalMovieDB);