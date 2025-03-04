"use strict"; 

document.addEventListener("DOMContentLoaded", function () {
    // Find elementer
    const ingredienserBtn = document.querySelector(".content-bottom li:nth-child(1)");
    const naeringsBtn = document.querySelector(".content-bottom li:nth-child(2)");
    
    const ingredienserHeading = document.querySelector(".ingredienser-heading");
    const ingredienserTekst = document.querySelector(".ingredienser-tekst");
    const hideElements = document.querySelectorAll(".hide");

    // Funktion til at skjule alle
    function hideAll() {
        ingredienserHeading.style.display = "none";
        ingredienserTekst.style.display = "none";
        hideElements.forEach(el => el.style.display = "none");
    }

    // Klik for "Ingredienser"
    ingredienserBtn.addEventListener("click", function () {
        hideAll();
        ingredienserHeading.style.display = "block";
        ingredienserTekst.style.display = "block";
    });

    // Klik for "Næringsindhold"
    naeringsBtn.addEventListener("click", function () {
        hideAll();
        hideElements.forEach(el => el.style.display = "block");
    });
});