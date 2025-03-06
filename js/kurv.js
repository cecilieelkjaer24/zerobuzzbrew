"use strict";

// Opdatering af totalpris og antal i kurven
const plusButtons = document.querySelectorAll('.increase');
const minusButtons = document.querySelectorAll('.decrease');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');

        // Opdater antal
        amountInput.value = parseInt(amountInput.value) + 1;

        // Opdater totalpris
        if (parseInt(amountInput.value) === 24) {
            totalPriceInput.value = 200; // Fast pris ved 24 stk.
        } else {
            totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value);
        }
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');

        if (parseInt(amountInput.value) > 1) {
            // Opdater antal
            amountInput.value = parseInt(amountInput.value) - 1;

            // Opdater totalpris
            if (parseInt(amountInput.value) === 24) {
                totalPriceInput.value = 200; // Fast pris ved 24 stk.
            } else {
                totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value);
            }
        }
    });
});