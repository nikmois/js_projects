'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('rest', 'operator', 'basic', 'usage');

function calcOrDouble(number, basis = 2) { //basis = 2 as standart
    console.log(number*basis);
}

calcOrDouble(3,5);