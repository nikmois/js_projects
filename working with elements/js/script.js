'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    
    const movieBg = document.querySelector('.promo__bg'),
          genre = movieBg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          advertises = document.querySelectorAll('.promo__adv');
          

    const deleteAdvertises = (arr) => { 
        arr.forEach (item => {
            item.remove();
        });
        };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            if (favorite) {
                console.log("added favourite movie");
            }
        }

        addForm.reset();

    });

    

    const makeChanges = () => {
        genre.replaceWith('Dramma');
    //genre.textContent('Drama'); //another way of changing
        movieBg.style.cssText = `background-image: url("img/bg.jpg")`;
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
                
            });
        });

    }
    
    
    
      
    deleteAdvertises(advertises);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});


