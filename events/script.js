const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');  

// btn.onclick = function() {
//     alert('click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// btn.addEventListener('click', () => {  //call-back function
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });


let i = 0;
const deleteElement = (e) => {  
    console.log(e.target);  //shows happened event
    console.log(e.type);
    e.target.remove(); //removes element with moving mouse on it
    console.log('Hover');
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); //removes event, not going to activate anymore
    // }
};

//btn.addEventListener('click', deleteElement); //activates on click
//overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //activates on click, only once
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();  //cancels usual behavior
    console.log(event.target);
}, {once: true}); //activates only once

