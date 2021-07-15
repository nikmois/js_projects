"use strict";

const now = new Date('2020-05-01');
//new Date.parse('2020-05-01');
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());   //day of the week

// console.log(now.getHours());   //gets hours at the moment
// console.log(now.getUTCHours());   //gets UTC hours at the moment

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

console.log(now.setHours(18, 45));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Cycle completed for ${end - start} ms`);