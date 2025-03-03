"use strict";

function toggleText() {
    // Find tekstboksen
    var textElement = document.querySelector('.gemttekst');
    
    // Toggle (skift) synlighed
    textElement.classList.toggle('visible');
}

