const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuIcon = document.querySelector('.burger-menu-button i');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuButton.onclick = function(){
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


/*-------------DERNIERES SORTIES--------------------*/

document.getElementById('dernieres-sorties').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('sorties-semaine').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-sorties').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('sorties-semaine').scrollIntoView({ behavior: 'smooth' });
});



/*-------------FILMS FRANCAIS--------------------*/

document.getElementById('film-fr').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('film-fr-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-france').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('film-fr-scroll').scrollIntoView({ behavior: 'smooth' });
});

/*-------------SERIES--------------------*/

document.getElementById('series-moment').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('series-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-series').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('series-scroll').scrollIntoView({ behavior: 'smooth' });
});


/*-------------CONNEXION--------------------*/


document.getElementById('connexion').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('connexion-array').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-connexion').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('connexion-array').scrollIntoView({ behavior: 'smooth' });
});


/*-------------CONTACT--------------------*/


document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('contact-array').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-contact').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('contact-array').scrollIntoView({ behavior: 'smooth' });
});


/*-------------NEWS--------------------*/


document.getElementById('suivis').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('suivis-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-suivis').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('suivis-scroll').scrollIntoView({ behavior: 'smooth' });
});




const leftArrow = document.getElementsByClassName('arrow-left');
const rightArrow = document.getElementsByClassName('arrow-right');
const slides = document.querySelector('.slides')
const listSlides = document.getElementsByClassName('slide');
let nbSlides = listSlides.length;
let activeSlide = 0;

function setMarge(button, max, step, frame){
    if(button == 'left'){
        activeSlide--;
        activeSlide = activeSlide < 0 ? 0 : activeSlide;
    } else {
        activeSlide++
        activeSlide = activeSlide > max - 1 ? max - 1 : activeSlide
    }

    let margeLeft = step * activeSlide;
    frame.style.marginLeft = -margeLeft + 'px';
}

leftArrow[0].addEventListener('click', function(){
    setMarge('left', nbSlides, 500, slides)
});

rightArrow[0].addEventListener('click', function(){
    setMarge('right', nbSlides, 500, slides)
});

/*--------------SLIDER---------------*/
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});