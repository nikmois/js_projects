"use strict";

function first() {
    // Do smth 
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I am studying: ${lang}`);
    callback();
}

// learnJS('JavaScript', function() {
//     console.log('I passed this lesson');
// });

function done() {
    console.log('I passed this lesson');
}

learnJS('Python', done);