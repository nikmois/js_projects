"use strict";

// console.log(document.body); //getting whole body
//console.log(document.documentElement);
//console.log(document.body.childNodes); //getting child elements of body
// console.log(document.body.firstChild); //getting first child element of body
// console.log(document.body.lastChild); //getting last child element of body

console.log(document.querySelector('#current').parentNode); //getting parent of button with id current

console.log(document.querySelector('[data-current="3"]').nextSibling); //getting node after seeking element
console.log(document.querySelector('[data-current="3"]').previousSibling); //getting node before seeking element

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //getting next element (not node)

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    
    console.log(node);
}