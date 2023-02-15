// VARIAVEIS DE PORTIFOLIO 

var portOne = document.querySelector('#port_card_one');
var portTwo = document.querySelector('#port_card_two');
var portThree = document.querySelector('#port_card_three');

var compOne = document.querySelector('#port_one');
var compTwo = document.querySelector('#port_two');
var compThree = document.querySelector('#port_three');

// PORTIFÓLIO 

portOne.addEventListener('click', function() {
    if(compTwo.style.display === 'block') {
        compTwo.style.display = 'none'
    }
    if(compThree.style.display === 'block') {
        compThree.style.display = 'none'
    }
    if(compOne.style.display === 'block') {
        compOne.style.display = 'none'
    }
    else {
        compOne.style.display = 'block';
    }
})

portTwo.addEventListener('click', function() {
    if(compOne.style.display === 'block') {
        compOne.style.display = 'none'
    }
    if(compThree.style.display === 'block') {
        compThree.style.display = 'none'
    }
    if(compTwo.style.display === 'block') {
        compTwo.style.display = 'none'
    }
    else {
        compTwo.style.display = 'block';
    }
})

portThree.addEventListener('click', function() {
    if(compOne.style.display === 'block') {
        compOne.style.display = 'none'
    }
    if(compTwo.style.display === 'block') {
        compTwo.style.display = 'none'
    }
    if(compThree.style.display === 'block') {
        compThree.style.display = 'none'
    }
    else {
        compThree.style.display = 'block';
    }
})
