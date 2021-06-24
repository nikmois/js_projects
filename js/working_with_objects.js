"use strict";

let a = 5,
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1

};

//const copy = obj; //giving a link to excisting object

copy.a = 10; 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};


const added = Object.assign(numbers, add);//new object, numbers + add
const clone = Object.assign({}, add); //creating a copy of object

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //making copy of array

newArray.push('some string'); //adds new last element of array

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal'],
      internet = [...video, ...blogs, 'vk', 'facebook'];//"..." spread and add array

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['bee', 'gaaa', 'hrrrr'];

const newAarray = [...array, 'qwe', 'qwe', 'rty'];//spreads array and adding elements

const q = {
    one: 1,
    two: 2

};

const p = {
    a: 59,
    b: 88
};

const newObj = {...q, ...p}; //spreads objects and creates new
console.log(newObj);