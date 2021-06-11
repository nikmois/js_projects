"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const firstMovie = prompt("One of the last movies you have watched?", ""),
     firstAnswer = prompt("Give it a raiting", ""),
     secondMovie = prompt("One of the last movies you have watched?", ""),
     secondAnswer = prompt("Give it a raiting", "");

personalMovieDB.movies[firstMovie] = firstAnswer;
personalMovieDB.movies[secondMovie] = secondAnswer;

console.log(personalMovieDB);