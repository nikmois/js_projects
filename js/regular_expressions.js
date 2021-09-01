'use strict';

// new RegExp('pattern', 'flags'); //too long syntax

// /pattern/f //TO USE

const ans = prompt('Enter your name');

const reg = /n/ig;   // syntax - /searched_letter/flag
// i  //up and lower case
// g  //multiple times
// m  

//classes in regexp
// \d        DIGITS
// \w        LETTERS
// \s        SPACES
// \D        NOT DIGITS
// \W        NOT LETTERS

console.log(reg.test(ans));  // returns boolean

console.log(ans.search(reg)); //gives index where search was successfull
console.log(ans.match(reg));  //gives more information 

const pass = prompt('Password');

console.log(pass.replace(/./g, "*")); //replaces 

console.log('12-34-56'.replace(/-/g, ':')); // 12:35:56


////

const reg2 = /\d/ig;

const ret = prompt('Enter a number');
console.log(ret.match(reg2));




/////
const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

