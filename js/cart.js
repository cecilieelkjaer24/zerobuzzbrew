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
let slides = ["img/hygge-ollen.png", "img/luksus-ollen2.png", "img/natur-ollen3.png"];
//her er der brugt en variabel til at skifte mellem billederne
let currentSlide = 0;
//her bruges der const til at finde id'et i html'en
const ImgElement = document.getElementById("hygge");

//herunder ses at vi kalder på ide'et til højre og venstre pil og tilføjer en eventlistener for at skifte mellem billederne ved at bruge en funktion
document.getElementById("venstrepil").addEventListener("click", () => changeSlide(-1));
document.getElementById("højrepil").addEventListener("click", () => changeSlide(1));

