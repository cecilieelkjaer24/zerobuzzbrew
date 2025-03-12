"use strict";

// herunder er der lavet en variabel til at finde id'et i HTML'en på plus- og minusknapperne
const plusButtons = document.querySelectorAll('.increase');
const minusButtons = document.querySelectorAll('.decrease');

// herunder er der lavet en forEach til at tilføje en eventlistener for at tilføje antal af varer
plusButtons.forEach(button => {
    // herunder er der lavet en eventlistener til at tilføje antal af varer
    button.addEventListener('click', () => {

        // herunder er der lavet variabler til at finde id'et i HTML'en på antal af varer, pris og totalpris
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input'); // Tilføjet

        //herunder er der tilføjet 1 til antal af varer i kurven
        amountInput.value = parseInt(amountInput.value) + 1;

        // herunder er der lavet en if statement til at opdatere totalpris i kurven 
        if (parseInt(amountInput.value) === 24) { 
            totalPriceInput.value = 200; // hvis antal af varer er 24, så er totalprisen 200
            totalInput.value = 200; // value er tilføjet for at opdatere totalpris i kurven
           
            // ellers opdateres totalpris baseret på antal af varer
        } else {
            //herunder er der lavet en beregning til at opdatere totalpris i kurven ved at gange antal af varer med prisen
            totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value); 
            // Tilføjet nedenstående linje for at opdatere totalpris i kurven
            totalInput.value = parseInt(amountInput.value) * parseInt(priceInput.value); // Tilføjet
        }
    });
});

// herunder er der lavet en forEach til at tilføje en eventlistener for at fjerne antal af varer
minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        // herunder er der lavet variabler til at finde id'et i HTML'en på antal af varer, pris og totalpris
        const amountInput = button.parentElement.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input'); // Tilføjet

        // herunder er der lavet en if statement til at fjerne antal af varer i kurven
        if (parseInt(amountInput.value) > 0) {
            // Opdater antal af varer i kurven med -1 hvis antal af varer er større end 0
            amountInput.value = parseInt(amountInput.value) - 1;

            // Opdater totalpris i kurven baseret på antal af varer hvis antal af varer er større end 0
            if (parseInt(amountInput.value) === 24) { // Hvis antal af varer er 24, så er totalprisen 200
                totalPriceInput.value = 200; // Fast pris ved 24 stk.
                totalInput.value = 200; // Tilføjet
            } else {
                //her ses beregningen til at opdatere totalpris i kurven ved at gange antal af varer med prisen
                totalPriceInput.value = parseInt(amountInput.value) * parseInt(priceInput.value);
                totalInput.value = parseInt(amountInput.value) * parseInt(priceInput.value); // Tilføjet for at opdatere totalpris i kurven
            }
        }
    });
});




// Tilføjelse af produkter til kurven og opdatering af totalpris og antal
const kurvKnapper = document.querySelectorAll('.kurv-knap');

// Tilføj eventlistener til hver kurv-knap
kurvKnapper.forEach(knap => {
    knap.addEventListener('click', () => {
        //her ses variabler til at finde data-attributter i HTML'en
        const produktNavn = knap.dataset.product; 
        const pris = parseInt(knap.parentElement.querySelector('p').textContent); // Hent prisen fra <p> 

        // Opdater antal og totalpris i kurven 
        const amountInput = document.querySelector('.quantity-input');
        const priceInput = document.getElementById('price-input');
        const totalPriceInput = document.getElementById('total-price-input');
        const totalInput = document.querySelector('.total input');

        // Opdater antal af varer i kurven med 1
        amountInput.value = parseInt(amountInput.value) + 1;
        priceInput.value = pris; // Opdater prisen
        
        // Opdater totalpris i kurven baseret på antal af varer
        if (parseInt(amountInput.value) === 24) {
            totalPriceInput.value = 200;
            totalInput.value = 200;

            // Opdater totalpris i kurven baseret på antal af varer
        } else {
            totalPriceInput.value = parseInt(amountInput.value) * pris;
            totalInput.value = parseInt(amountInput.value) * pris;
        }
    });
});

