const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');

    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// var navbar = document.getElementById("header");
// var imgOne = document.getElementById("logo");
// var imgTwo = document.getElementById("logo_two");

// window.onscroll = function() {
//     if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
//         imgOne.classList.add('scrolled'),
//         imgTwo.classList.remove('scrolled');
//     }
//     else {
//         imgOne.classList.remove('scrolled'),
//         imgTwo.classList.add('scrolled');
//     }
// }