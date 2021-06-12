"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error');
}



// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('Ok!') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 51:
        console.log('wrong');
        break;
    case 500:
        console.log('wrong');
        break;
    case 50:
        console.log('correct');
        break;
    default:
        console.log('wrong');
        break;
}