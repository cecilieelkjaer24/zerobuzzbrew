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