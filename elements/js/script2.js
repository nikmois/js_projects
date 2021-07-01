'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
//all changed styles are going in inline css styles (watch in browser console)
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `background-color: blue; width: 500px`;//can write css code

// for (let i = 0; i < hearts.length; i++) {    //applying styles for each element
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {                  //applying styles for each element
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Here was I');

div.classList.add('black');

// wrapper.append(div); //adds element in the end of div
//wrapper.appendChild(div); //element goes in the end of parent
// wrapper.prepend(div);//adds element in the beginning of div 

//hearts[0].before(div); //adds element before some element
//hearts[0].after(div);  //adds element after some element

wrapper.insertBefore(div, hearts[1]);//adds element before some element

circles[2].remove(); //deletes element - new version
//wrapper.removeChild(hearts[2]); //deletes child element - old version

hearts[2].replaceWith(circles[0]); //replace element - new version
wrapper.replaceChild(circles[0], hearts[0]); //replace element - old version

div.innerHTML = "<h1>Hello world</h1>"; //ability to implement HTML code

//div.textContent = "Hello"; //ability to implement text in element

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); //implement HTML code in exact pos
