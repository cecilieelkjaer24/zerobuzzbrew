"use strict"; 

document.addEventListener("DOMContentLoaded", function () {
    // Find elementer
    const ingredienserBtn = document.querySelector(".content-bottom li:nth-child(1)");
    const naeringsBtn = document.querySelector(".content-bottom li:nth-child(2)");
    const krydsIkon = document.querySelector(".kryds-ikon"); // Krydsknappen
    const infoVideo = document.querySelector(".info-video");

    const ingredienserHeading = document.querySelector(".ingredienser-heading");
    const ingredienserTekst = document.querySelector(".ingredienser-tekst");
    const hideElements = document.querySelectorAll(".hide");
    const naeringContainer = document.querySelector(".naering-container"); // Container for teksten

    // Funktion til at skjule alt
    function hideAll() {
        ingredienserHeading.style.display = "none";
        ingredienserTekst.style.display = "none";
        hideElements.forEach(el => el.style.display = "none");
    }


    // Funktion til at skjule videoen
    function hideVideo() {
        if (infoVideo) {
            infoVideo.style.display = "none";
        }
    }

    // Funktion til at vise videoen igen
    function showVideo() {
        if (infoVideo) {
            infoVideo.style.display = "block";
        }
    }


    // Klik for "Ingredienser"
    ingredienserBtn.addEventListener("click", function () {
        hideAll();
        hideVideo();
        naeringContainer.style.display = "block";
        ingredienserHeading.style.display = "block";
        ingredienserTekst.style.display = "block";
        krydsIkon.style.display = "block";
        
    });

    // Klik for "Næringsindhold"
    naeringsBtn.addEventListener("click", function () {
        hideAll();
        hideVideo();
        naeringContainer.style.display = "block";
        hideElements.forEach(el => el.style.display = "block"); // Sikrer, at næringsindhold vises
    });

    // Klik på krydsknappen for at lukke
    krydsIkon.addEventListener("click", function () {
        hideAll();
        showVideo();
    });

    
    
});



