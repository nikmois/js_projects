'use strict';

console.log('Data request...');

const req = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log('Preparing data...');
    
        const product = {
            name: 'TV',
            price: 654
        };
    
        resolve(product);
    },2000);
});

req.then((product)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        product.status = 'order';
        resolve(product);
    }, 2000);
   });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(()=>{
    console.log('Error accured..');
}).finally(()=>{
    console.log('Finally');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), time);
    });
};

// test(1000).then(()=> console.log('1000 ms'));

Promise.all([test(1000), test(2000)]).then(()=>{
    console.log('All promises are executed');
});

Promise.race([test(1000), test(2000)]).then(()=>{
    console.log('All promises are executed');
});


