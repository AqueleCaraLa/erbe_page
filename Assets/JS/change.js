// VARIAVEIS IMAGENS - DIV ONE

var selectionImgOneOne = document.querySelector('#one_small_one');
var selectionImgOneTwo = document.querySelector('#one_small_two');
var selectionImgOneThree = document.querySelector('#one_small_three');
var selectionImgOneFour = document.querySelector('#one_small_four');

var selectedImgOneOne = document.querySelector('#one_img_one');
var selectedImgOneTwo = document.querySelector('#one_img_two');
var selectedImgOneThree = document.querySelector('#one_img_three');
var selectedImgOneFour = document.querySelector('#one_img_four');

// VARIAVEIS IMAGENS - DIV TWO

var selectionImgTwoOne = document.querySelector('#two_small_one');
var selectionImgTwoTwo = document.querySelector('#two_small_two');
var selectionImgTwoThree = document.querySelector('#two_small_three');
var selectionImgTwoFour = document.querySelector('#two_small_four');

var selectedImgTwoOne = document.querySelector('#two_img_one');
var selectedImgTwoTwo = document.querySelector('#two_img_two');
var selectedImgTwoThree = document.querySelector('#two_img_three');
var selectedImgTwoFour = document.querySelector('#two_img_four');

// VARIAVEIS IMAGENS - DIV THREE

var selectionImgThreeOne = document.querySelector('#three_small_one');
var selectionImgThreeTwo = document.querySelector('#three_small_two');
var selectionImgThreeThree = document.querySelector('#three_small_three');
var selectionImgThreeFour = document.querySelector('#three_small_four');

var selectedImgThreeOne = document.querySelector('#three_img_one');
var selectedImgThreeTwo = document.querySelector('#three_img_two');
var selectedImgThreeThree = document.querySelector('#three_img_three');
var selectedImgThreeFour = document.querySelector('#three_img_four');

// DIV ONE FUNCTION 

selectionImgOneOne.addEventListener('click', function() {
    if(selectedImgOneTwo.style.display === 'block') {
        selectedImgOneTwo.style.display = 'none',
        selectionImgOneTwo.classList.remove('selected'),
        selectionImgOneTwo.classList.add('hover_img')
    }
    if(selectedImgOneThree.style.display === 'block') {
        selectedImgOneThree.style.display = 'none',
        selectionImgOneThree.classList.remove('selected'),
        selectionImgOneThree.classList.add('hover_img')
    }
    if(selectedImgOneFour.style.display === 'block') {
        selectedImgOneFour.style.display = 'none',
        selectionImgOneFour.classList.remove('selected'),
        selectionImgOneFour.classList.add('hover_img')
    }
    if(selectedImgOneOne.style.display === 'none') {
        selectedImgOneOne.style.display = 'block',
        selectionImgOneOne.classList.remove('hover_img'),
        selectionImgOneOne.classList.add('selected')
    }
    else {
        selectedImgOneOne.style.display = 'block',
        selectionImgOneOne.classList.add('selected')
    }
})

selectionImgOneTwo.addEventListener('click', function() {
    if(selectedImgOneOne.style.display === 'block') {
        selectedImgOneOne.style.display = 'none',
        selectionImgOneOne.classList.remove('selected'),
        selectionImgOneOne.classList.add('hover_img')
    }
    if(selectedImgOneThree.style.display === 'block'){
        selectedImgOneThree.style.display = 'none',
        selectionImgOneThree.classList.remove('selected'),
        selectionImgOneThree.classList.add('hover_img')
    }
    if(selectedImgOneFour.style.display === 'block'){
        selectedImgOneFour.style.display = 'none',
        selectionImgOneFour.classList.remove('selected'),
        selectionImgOneFour.classList.add('hover_img')
    }
    if(selectedImgOneTwo.style.display === 'none'){
        selectedImgOneTwo.style.display = 'block',
        selectionImgOneTwo.classList.remove('hover_img'),
        selectionImgOneTwo.classList.add('selected')
    }
    else {
        selectedImgOneTwo.style.display = 'block',
        selectionImgOneTwo.classList.add('selected')
    }
})

selectionImgOneThree.addEventListener('click', function() {
    if(selectedImgOneOne.style.display === 'block'){
        selectedImgOneOne.style.display = 'none',
        selectionImgOneOne.classList.remove('selected'),
        selectionImgOneOne.classList.add('hover_img')
    }
    if(selectedImgOneTwo.style.display === 'block'){
        selectedImgOneTwo.style.display = 'none'
        selectionImgOneTwo.classList.remove('selected'),
        selectionImgOneTwo.classList.add('hover_img')
    }
    if(selectedImgOneFour.style.display === 'block'){
        selectedImgOneFour.style.display = 'none'
        selectionImgOneFour.classList.remove('selected'),
        selectionImgOneFour.classList.add('hover_img')
    }
    if(selectedImgOneThree.style.display === 'none'){
        selectedImgOneThree.style.display = 'block',
        selectionImgOneThree.classList.remove('hover_img'),
        selectionImgOneThree.classList.add('selected')
    }
    else {
        selectedImgOneThree.style.display = 'block',
        selectionImgOneThree.classList.add('selected')
    }
})

selectionImgOneFour.addEventListener('click', function() {
    if(selectedImgOneOne.style.display === 'block'){
        selectedImgOneOne.style.display = 'none',
        selectionImgOneOne.classList.remove('selected'),
        selectionImgOneOne.classList.add('hover_img')
    }
    if(selectedImgOneTwo.style.display === 'block'){
        selectedImgOneTwo.style.display = 'none',
        selectionImgOneTwo.classList.remove('selected'),
        selectionImgOneTwo.classList.add('hover_img')
    }
    if(selectedImgOneThree.style.display === 'block'){
        selectedImgOneThree.style.display = 'none',
        selectionImgOneThree.classList.remove('selected'),
        selectionImgOneThree.classList.add('hover_img')
    }
    if(selectedImgOneFour.style.display === 'none'){
        selectedImgOneFour.style.display = 'block',
        selectionImgOneFour.classList.remove('hover_img'),
        selectionImgOneFour.classList.add('selected')
    }
    else {
        selectedImgOneFour.style.display = 'block',
        selectionImgOneFour.classList.add('selected')
    }
})

// DIV TWO FUNCTION 

selectionImgTwoOne.addEventListener('click', function() {
    if(selectedImgTwoTwo.style.display === 'block'){
        selectedImgTwoTwo.style.display = 'none',
        selectionImgTwoTwo.classList.remove('selected'),
        selectionImgTwoTwo.classList.add('hover_img')
    }
    if(selectedImgTwoThree.style.display === 'block'){
        selectedImgTwoThree.style.display = 'none',
        selectionImgTwoThree.classList.remove('selected'),
        selectionImgTwoThree.classList.add('hover_img')
    }
    if(selectedImgTwoFour.style.display === 'block'){
        selectedImgTwoFour.style.display = 'none',
        selectionImgTwoFour.classList.remove('selected'),
        selectionImgTwoFour.classList.add('hover_img')
    }
    if(selectedImgTwoOne.style.display === 'none'){
        selectedImgTwoOne.style.display = 'block',
        selectionImgTwoOne.classList.remove('hover_img'),
        selectionImgTwoOne.classList.add('selected')
    }
    else {
        selectedImgTwoOne.style.display = 'block',
        selectionImgTwoOne.classList.add('selected')
    }
})

selectionImgTwoTwo.addEventListener('click', function() {
    if(selectedImgTwoOne.style.display === 'block'){
        selectedImgTwoOne.style.display = 'none',
        selectionImgTwoOne.classList.remove('selected'),
        selectionImgTwoOne.classList.add('hover_img')
    }
    if(selectedImgTwoThree.style.display === 'block'){
        selectedImgTwoThree.style.display = 'none',
        selectionImgTwoThree.classList.remove('selected'),
        selectionImgTwoThree.classList.add('hover_img')
    }
    if(selectedImgTwoFour.style.display === 'block'){
        selectedImgTwoFour.style.display = 'none',
        selectionImgTwoFour.classList.remove('selected'),
        selectionImgTwoFour.classList.add('hover_img')
    }
    if(selectedImgTwoTwo.style.display === 'none'){
        selectedImgTwoTwo.style.display = 'block',
        selectionImgTwoTwo.classList.remove('hover_img'),
        selectionImgTwoTwo.classList.add('selected')
    }
    else {
        selectedImgTwoTwo.style.display = 'block',
        selectionImgTwoTwo.classList.add('selected')
    }
})

selectionImgTwoThree.addEventListener('click', function() {
    if(selectedImgTwoOne.style.display === 'block'){
        selectedImgTwoOne.style.display = 'none',
        selectionImgTwoOne.classList.remove('selected'),
        selectionImgTwoOne.classList.add('hover_img')
    }
    if(selectedImgTwoTwo.style.display === 'block'){
        selectedImgTwoTwo.style.display = 'none'
        selectionImgTwoTwo.classList.remove('selected'),
        selectionImgTwoTwo.classList.add('hover_img')
    }
    if(selectedImgTwoFour.style.display === 'block'){
        selectedImgTwoFour.style.display = 'none'
        selectionImgTwoFour.classList.remove('selected'),
        selectionImgTwoFour.classList.add('hover_img')
    }
    if(selectedImgTwoThree.style.display === 'none'){
        selectedImgTwoThree.style.display = 'block',
        selectionImgTwoThree.classList.remove('hover_img'),
        selectionImgTwoThree.classList.add('selected')
    }
    else {
        selectedImgTwoThree.style.display = 'block',
        selectionImgTwoThree.classList.add('selected')
    }
})

selectionImgTwoFour.addEventListener('click', function() {
    if(selectedImgTwoOne.style.display === 'block'){
        selectedImgTwoOne.style.display = 'none',
        selectionImgTwoOne.classList.remove('selected'),
        selectionImgTwoOne.classList.add('hover_img')
    }
    if(selectedImgTwoTwo.style.display === 'block'){
        selectedImgTwoTwo.style.display = 'none',
        selectionImgTwoTwo.classList.remove('selected'),
        selectionImgTwoTwo.classList.add('hover_img')
    }
    if(selectedImgTwoThree.style.display === 'block'){
        selectedImgTwoThree.style.display = 'none',
        selectionImgTwoThree.classList.remove('selected'),
        selectionImgTwoThree.classList.add('hover_img')
    }
    if(selectedImgTwoFour.style.display === 'none'){
        selectedImgTwoFour.style.display = 'block',
        selectionImgTwoFour.classList.remove('hover_img'),
        selectionImgTwoFour.classList.add('selected')
    }
    else {
        selectedImgTwoFour.style.display = 'block',
        selectionImgTwoFour.classList.add('selected')
    }
})

// DIV THREE FUNCTION 

selectionImgThreeOne.addEventListener('click', function() {
    if(selectedImgThreeTwo.style.display === 'block'){
        selectedImgThreeTwo.style.display = 'none',
        selectionImgThreeTwo.classList.remove('selected'),
        selectionImgThreeTwo.classList.add('hover_img')
    }
    if(selectedImgThreeThree.style.display === 'block'){
        selectedImgThreeThree.style.display = 'none',
        selectionImgThreeThree.classList.remove('selected'),
        selectionImgThreeThree.classList.add('hover_img')
    }
    if(selectedImgThreeFour.style.display === 'block'){
        selectedImgThreeFour.style.display = 'none',
        selectionImgThreeFour.classList.remove('selected'),
        selectionImgThreeFour.classList.add('hover_img')
    }
    if(selectedImgThreeOne.style.display === 'none'){
        selectedImgThreeOne.style.display = 'block',
        selectionImgThreeOne.classList.remove('hover_img'),
        selectionImgThreeOne.classList.add('selected')
    }
    else {
        selectedImgThreeOne.style.display = 'block',
        selectionImgThreeOne.classList.add('selected')
    }
})

selectionImgThreeTwo.addEventListener('click', function() {
    if(selectedImgThreeOne.style.display === 'block'){
        selectedImgThreeOne.style.display = 'none',
        selectionImgThreeOne.classList.remove('selected'),
        selectionImgThreeOne.classList.add('hover_img')
    }
    if(selectedImgThreeThree.style.display === 'block'){
        selectedImgThreeThree.style.display = 'none',
        selectionImgThreeThree.classList.remove('selected'),
        selectionImgThreeThree.classList.add('hover_img')
    }
    if(selectedImgThreeFour.style.display === 'block'){
        selectedImgThreeFour.style.display = 'none',
        selectionImgThreeFour.classList.remove('selected'),
        selectionImgThreeFour.classList.add('hover_img')
    }
    if(selectedImgThreeTwo.style.display === 'none'){
        selectedImgThreeTwo.style.display = 'block',
        selectionImgThreeTwo.classList.remove('hover_img'),
        selectionImgThreeTwo.classList.add('selected')
    }
    else {
        selectedImgThreeTwo.style.display = 'block',
        selectionImgThreeTwo.classList.add('selected')
    }
})

selectionImgThreeThree.addEventListener('click', function() {
    if(selectedImgThreeOne.style.display === 'block'){
        selectedImgThreeOne.style.display = 'none',
        selectionImgThreeOne.classList.remove('selected'),
        selectionImgThreeOne.classList.add('hover_img')
    }
    if(selectedImgThreeTwo.style.display === 'block'){
        selectedImgThreeTwo.style.display = 'none'
        selectionImgThreeTwo.classList.remove('selected'),
        selectionImgThreeTwo.classList.add('hover_img')
    }
    if(selectedImgThreeFour.style.display === 'block'){
        selectedImgThreeFour.style.display = 'none'
        selectionImgThreeFour.classList.remove('selected'),
        selectionImgThreeFour.classList.add('hover_img')
    }
    if(selectedImgThreeThree.style.display === 'none'){
        selectedImgThreeThree.style.display = 'block',
        selectionImgThreeThree.classList.remove('hover_img'),
        selectionImgThreeThree.classList.add('selected')
    }
    else {
        selectedImgThreeThree.style.display = 'block',
        selectionImgThreeThree.classList.add('selected')
    }
})

selectionImgThreeFour.addEventListener('click', function() {
    if(selectedImgThreeOne.style.display === 'block'){
        selectedImgThreeOne.style.display = 'none',
        selectionImgThreeOne.classList.remove('selected'),
        selectionImgThreeOne.classList.add('hover_img')
    }
    if(selectedImgThreeTwo.style.display === 'block'){
        selectedImgThreeTwo.style.display = 'none',
        selectionImgThreeTwo.classList.remove('selected'),
        selectionImgThreeTwo.classList.add('hover_img')
    }
    if(selectedImgThreeThree.style.display === 'block'){
        selectedImgThreeThree.style.display = 'none',
        selectionImgThreeThree.classList.remove('selected'),
        selectionImgThreeThree.classList.add('hover_img')
    }
    if(selectedImgThreeFour.style.display === 'none'){
        selectedImgThreeFour.style.display = 'block',
        selectionImgThreeFour.classList.remove('hover_img'),
        selectionImgThreeFour.classList.add('selected')
    }
    else {
        selectedImgThreeFour.style.display = 'block',
        selectionImgThreeFour.classList.add('selected')
    }
})
