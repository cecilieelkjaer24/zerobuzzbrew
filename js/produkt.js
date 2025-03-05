"use strict";

// Herunder er der lavet en variabel til at finde id'et i HTML'en
let cart = [];

// Herunder er der lavet en variabel til at finde id'et i HTML'en
const addToCartButtons = document.querySelectorAll('.kurv-knap');

// Herunder er der lavet en forEach til at tilføje en eventlistener for at tilføje et produkt til kurven
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Herunder er der lavet en variabel til at finde data-attributten i HTML'en
        const product = event.target.getAttribute('data-product');
        // Herunder er der lavet en funktion til at tilføje et produkt til kurven
        addToCart(event.target, product);
    });
});

// Funktion til at tilføje produkt til kurven
function addToCart(button, product) {
    // Tjek om produktet allerede er i kurven
    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ product: product, quantity: 1 });
    }

    // Opdater knappen med den aktuelle mængde
    updateButton(button, product);

    // Opdater kurv-badge med total antal varer
    updateCartCount();

    // Vis eller opdater fjern-knappen
    displayRemoveButton(button, product);
}

// Funktion til at opdatere knappen
function updateButton(button, product) {
    const productInCart = cart.find(item => item.product === product);
    if (productInCart) {
        button.textContent = `${productInCart.quantity} +`;
    }
}

// Funktion til at opdatere antallet af varer i kurven
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// Funktion til at vise eller opdatere fjern-knappen
function displayRemoveButton(button, product) {
    const productContainer = button.parentElement;
    let removeButton = productContainer.querySelector('.remove-button');

    // Tjek om fjern-knappen allerede findes
    if (!removeButton) {
        // Hvis ikke, opret en ny fjern-knap
        removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Fjern';

        // Tilføj event listener til at fjerne produktet
        removeButton.addEventListener('click', () => removeOneFromCart(product, removeButton, button));
        productContainer.appendChild(removeButton);
    }
}

// Funktion til at fjerne et produkt fra kurven
function removeOneFromCart(product, removeButton, button) {
    const productIndex = cart.findIndex(item => item.product === product);
    if (productIndex !== -1) {
        const productInCart = cart[productIndex];
        if (productInCart.quantity > 1) {
            productInCart.quantity--;
        } else {
            cart.splice(productIndex, 1);
        }

        // Opdater knappen og kurv-tælleren
        updateButton(button, product);
        updateCartCount();

        // Fjern fjern-knappen, hvis produktet ikke længere er i kurven
        if (productInCart.quantity === 0) {
            removeButton.remove();
        }
    }

    console.log(`${product} blev fjernet fra kurven`);
}
