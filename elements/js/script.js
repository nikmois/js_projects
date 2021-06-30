'use strict';


const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');//possible to add index in the end

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //new version of getting element
//finds elements by css selector
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
//finds only one (first) element
console.log(oneHeart);

const allButtons = document.querySelectorAll('button');
console.log(allButtons);