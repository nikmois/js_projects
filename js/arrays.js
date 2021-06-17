"use strict";

const arr = [1, 2, 3, 6, 4];

arr.sort(compareNum); //sorting array with numbers

function compareNum(a, b) {   //function which cas sort numbers
    return a - b;
}

arr.pop(); //deletes last element
arr.push(10); //add last element


console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {   //call-back function
    console.log(`${i}: ${item} inside array ${arr}`);
});

const str = prompt("",""); //user inputs elements with ","
const products = str.split(", "); //user information is forming in array
products.sort();

console.log(products.join(';')); //array is presented as string