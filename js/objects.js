"use strict";


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();


const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);

//delete options.name; //deleting property of object

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Option ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Option ${key} has value ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);

