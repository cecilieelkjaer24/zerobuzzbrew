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

    // Tilføj fjern-knap
    displayRemoveButton(button, product);
}

function updateButton(button, product) {
    const productInCart = cart.find(item => item.product === product);
    if (productInCart) {
        button.textContent = `${productInCart.quantity} +`;
    }
}

// herunder er der lavet en funktion til at opdatere antallet af produkter i kurven
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalQuantity; // Update badge with the current number of items
}

function displayRemoveButton(button, product){
    let removeButton = button.parentElement.querySelector('.remove-button');
    if (!removeButton){
        removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Fjern';
        removeButton.addEventListener('click', () => removeOneFromCart(product));
        button.parentElement.appendChild(removeButton);
    }
}

function removeOneFromCart(product) {
    // Find produktet i kurven
    const productIndex = cart.findIndex(item => item.product === product);
    const productInCart = cart[productIndex];  // Fetch the correct product from cart

    if (productInCart) {
        if (productInCart.quantity > 1) {
            // Reducer antallet med én
            productInCart.quantity--;
        } else {
            // Hvis produktet kun har 1 enhed, fjernes det fra kurven
            cart.splice(productIndex, 1);
        }
    }

    // Opdater kurv-badge med det samlede antal produkter
    updateCartCount();

    // Opdater knappen for produktet
    const productButton = document.querySelector(`[data-product="${product}"]`);
    if (productButton) {
        updateButton(productButton, product);
    }

    // Hvis produktet er fjernet helt, fjern fjern-knappen
    const removeButton = button.parentElement.querySelector('.remove-button');
    if (productInCart && productInCart.quantity === 0 && removeButton) {
        removeButton.remove();
    }

    console.log(`${product} blev fjernet fra kurven`);
}
