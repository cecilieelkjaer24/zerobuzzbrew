"use strict";

// Opdatering af totalpris og antal i kurven
const plusButtons = document.querySelectorAll('.increase');
const minusButtons = document.querySelectorAll('.decrease');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input'); // Tilføjet

        // Opdater antal
        amountInput.value = parseInt(amountInput.value) + 1;

        // Opdater totalpris
        if (parseInt(amountInput.value) === 24) {
            totalPriceInput.value = 200; // Fast pris ved 24 stk.
            totalInput.value = 200; // Tilføjet
        } else {
            totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value);
            totalInput.value = parseInt(amountInput.value) * parseInt(priceInput.value); // Tilføjet
        }
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input'); // Tilføjet

        if (parseInt(amountInput.value) > 0) {
            // Opdater antal
            amountInput.value = parseInt(amountInput.value) - 1;

            // Opdater totalpris
            if (parseInt(amountInput.value) === 24) {
                totalPriceInput.value = 200; // Fast pris ved 24 stk.
                totalInput.value = 200; // Tilføjet
            } else {
                totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value);
                totalInput.value = parseInt(amountInput.value) * parseInt(priceInput.value); // Tilføjet
            }
        }
    });
});

"use strict";



// Tilføjelse af produkter til kurven og opdatering af totalpris og antal
const kurvKnapper = document.querySelectorAll('.kurv-knap');

kurvKnapper.forEach(knap => {
    knap.addEventListener('click', () => {
        const produktNavn = knap.dataset.product;
        const pris = parseInt(knap.parentElement.querySelector('p').textContent); // Hent prisen fra <p>

        // Opdater antal og totalpris i kurven
        const amountInput = document.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input');

        amountInput.value = parseInt(amountInput.value) + 1;
        priceInput.value = pris; // Opdater prisen
        
        if (parseInt(amountInput.value) === 24) {
            totalPriceInput.value = 200;
            totalInput.value = 200;
        } else {
            totalPriceInput.value = parseInt(amountInput.value) * pris;
            totalInput.value = parseInt(amountInput.value) * pris;
        }
    });
});

