/*-------------MENU BURGER-----------------*/

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
    event.preventDefault();
    document.getElementById('sorties-semaine').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-sorties').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('sorties-semaine').scrollIntoView({ behavior: 'smooth' });
});



/*-------------FILMS FRANCAIS--------------------*/

document.getElementById('film-fr').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('film-fr-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-france').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('film-fr-scroll').scrollIntoView({ behavior: 'smooth' });
});

/*-------------SERIES--------------------*/

document.getElementById('series-moment').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('series-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-series').addEventListener('click', function(event) {
    event.preventDefault();  
    document.getElementById('series-scroll').scrollIntoView({ behavior: 'smooth' });
});

/*--------------NEWS-------------*/

document.getElementById('suivis').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('suivis-scroll').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-suivis').addEventListener('click', function(event) {
    event.preventDefault();  
    document.getElementById('suivis-scroll').scrollIntoView({ behavior: 'smooth' });
});



/*-------------CONNEXION--------------------*/


document.getElementById('connexion').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('connexion-array').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-connexion').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('connexion-array').scrollIntoView({ behavior: 'smooth' });
});


/*-------------CONTACT--------------------*/


document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact-array').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('desk-contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact-array').scrollIntoView({ behavior: 'smooth' });
});
