"use strict";

const str = "teSt";
const arr = [1,2,4];

// console.log(arr.length);
// console.log(str.length);
// console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));  //index not found, index = -1
console.log(fruit.indexOf("fruit")); //index = 5

const logg = "Hello world";

console. log(logg.slice(6, 11)); 

console. log(logg.substring(6, 11)); 

console. log(logg.substr(6, 5)); 

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

