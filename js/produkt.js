"use strict";

// herunder er der lavet en variabel til at finde id'et i html'en
let cart = [];

// herunder er der lavet en variabel til at finde id'et i html'en
const addToCartButtons = document.querySelectorAll('.kurv-knap');

// herunder er der lavet en forEach til at tilføje en eventlistener for at tilføje et produkt til kurven
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // herunder er der lavet en variabel til at finde data-attributten i html'en
        const product = event.target.getAttribute('data-product');
        // herunder er der lavet en funktion til at tilføje et produkt til kurven
        addToCart(event.target, product);
    });
});

// herunder er der lavet en funktion til at opdatere antallet af produkter i kurven
function addToCart(button, product) {

    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        existingProduct.quantity++;
    }
    else {
        cart.push({ product: product, quantity: 1 });
    }

    // herunder er der lavet en console.log til at vise at et produkt er blevet tilføjet til kurven
    console.log(`${product} blev tilføjet til kurven`);
    // herunder er der lavet en console.log til at vise den nuværende kurv
    console.log('Nuværende kurv:', cart);

    updateButton(button, product);
    // herunder er der lavet en funktion til at opdatere antallet af produkter i kurven
    updateCartCount();
}

function updateButton(button, product) {
   
    const productInCart = cart.find (item => item.product === product);
    if (productInCart){
        button.textContent = `${productInCart.quantity} +`;
    }
}

// herunder er der lavet en funktion til at opdatere antallet af produkter i kurven
function updateCartCount() {
    // herunder er der lavet en variabel til at finde id'et i html'en
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    // herunder er der lavet en innerText til at opdatere antallet af produkter i kurven
    cartCount.textContent = totalQuantity; // Update badge with the current number of items
}
