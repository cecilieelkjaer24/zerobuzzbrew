"use strict";

//herunder er der lavet en variabel til at finde id'et i HTML'en med querySelector 
const cartTab = document.querySelector('.cart-tab');
const cartButton = document.querySelector('.kurv-btn');
const closeButton = document.querySelector('.close-cart');

//herunder er der lavet en eventlistener til at åbne kurven, når der klikkes på kurv-knappen
// Open cart when clicking the cart button
cartButton.addEventListener('click', function () {
    //herunder er der tilføjet en klasse til at vise kurven
    cartTab.classList.add('active');  // Show cart
    //herunder er der fjernet en klasse for at skjule kurven
    cartTab.classList.remove('inactive'); // Ensure inactive is removed
});

// Close cart when clicking the close button
closeButton.addEventListener('click', function () {
    cartTab.classList.remove('active'); // Hide cart
    cartTab.classList.add('inactive');  // Explicitly mark inactive (optional)
});

