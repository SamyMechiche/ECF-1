const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuIcon = document.querySelector('.burger-menu-button i');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuButton.onclick = function(){
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

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