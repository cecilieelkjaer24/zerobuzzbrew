"use strict";

const cartTab = document.querySelector('.cart-tab');
const cartButton = document.querySelector('.kurv-btn');
const closeButton = document.querySelector('.close-cart');

// Open cart when clicking the cart button
cartButton.addEventListener('click', function () {
    cartTab.classList.add('active');  // Show cart
    cartTab.classList.remove('inactive'); // Ensure inactive is removed
});

// Close cart when clicking the close button
closeButton.addEventListener('click', function () {
    cartTab.classList.remove('active'); // Hide cart
    cartTab.classList.add('inactive');  // Explicitly mark inactive (optional)
});

//slideshow til forsiden 
//her er der brugt en array til at skifte mellem billederne
let slides = [
   {image: "img/hygge-ollen.png", color: "#1b26b2", buttonColor: "#1b26b2", buttonTextColor: "#ccdcff", link: "hygge.html"},
   {image: "img/luksus-ollen.png", color: "#1b26b2", buttonColor: "#ccdcff", buttonTextColor: "#1b26b2", link: "luksus.html"},
   {image: "img/natur-ollen.png", color: "#64ac3c", buttonColor: "#64ac3c", buttonTextColor: "#dbf6d6", link: "natur.html"}
];



//her er der brugt en variabel til at skifte mellem billederne
let currentSlide = 0;
//her bruges der const til at finde id'et i html'en
const ImgElement = document.getElementById("hygge");
const titleElement = document.getElementById("title");
const buttonElement = document.getElementById("laesMereKnap");


//herunder ses at vi kalder på ide'et til højre og venstre pil og tilføjer en eventlistener for at skifte mellem billederne ved at bruge en funktion
document.getElementById("venstrepil").addEventListener("click", () => changeSlide(-1));
document.getElementById("hoejrepil").addEventListener("click", () => changeSlide(1));

function changeSlide(direction){
    currentSlide += direction;
    if(currentSlide >= slides.length) currentSlide = 0;
    if(currentSlide < 0) currentSlide = slides.length - 1;

    ImgElement.src = slides[currentSlide].image;
    titleElement.style.color = slides[currentSlide].color;
    buttonElement.style.backgroundColor = slides[currentSlide].buttonColor;
    buttonElement.style.color = slides[currentSlide].buttonTextColor;
    
    buttonElement.onclick = function(){
        window.location.href = slides[currentSlide].link;
    }

    ImgElement.onclick = function(){
        window.location.href = slides[currentSlide].link;
    }

}