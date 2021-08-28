'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Nikolai'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some

const arr = [4, 'qwq', 'dsfgwse'];

console.log(arr.some(item => typeof(item) === 'number'));

console.log(arr.every(item => typeof(item) === 'number'));

// reduce

const array = [4,5,1,3,2,6];
const strings = ['skot', 'tochno', 'norm', 'paren'];

const res = array.reduce((sum,current) => sum + current);

const tyu = strings.reduce((sum,current) => `${sum}, ${current}`);

console.log(res);
console.log(tyu);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //entries - making array of arrays
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
