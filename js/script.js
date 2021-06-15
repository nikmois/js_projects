"use strict";

let numberOfFilms;

function start() {  
    numberOfFilms = +prompt("How many movies have you watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const firstMovie = prompt("One of the last movies you have watched?", "");
        const firstAnswer = prompt("Give it a raiting", "");
        if (firstMovie != null && firstAnswer != null && firstMovie != '' && firstAnswer != '' && firstMovie.length < 50 && firstAnswer.length < 50) {
            console.log("done");
            personalMovieDB.movies[firstMovie] = firstAnswer;
        } else {
            console.log("error");
            i--;
        }

    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("too less");
    } else if (10 <= personalMovieDB.count && personalMovieDB < 30) {
        console.log("quite good");
    } else if (personalMovieDB.count >= 30) {
        console.log("wow, u are real movie lover");
    } else {
        console.log('error');
    }
}

function showMyDB (database) {         //function is showing database 
    if (database.privat == false) {    //if it is not private 
        console.log(database);
    } 
}

showMyDB(personalMovieDB);

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt("Ваш любимый жанр под номером " + i, "");
    }
}

writeYourGenres();
