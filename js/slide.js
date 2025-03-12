"use strict";
//slideshow til forsiden 
//array til at skifte mellem billeder, farver og links til hvert slide
let slides = [
    {image: "img/hygge-ollen.png", color: "#1b26b2", buttonColor: "#1b26b2", buttonTextColor: "#ccdcff", link: "hygge.html"},
    {image: "img/luksus-ollen.png", color: "#1b26b2", buttonColor: "#ccdcff", buttonTextColor: "#1b26b2", link: "luksus.html"},
    {image: "img/natur-ollen.png", color: "#64ac3c", buttonColor: "#64ac3c", buttonTextColor: "#dbf6d6", link: "natur.html"}
 ];
 
 
 
 //currentSlide er en variabel, der holder styr på, hvilken slide der vises lige nu
 let currentSlide = 0;
 // her er variabler, der holder styr på, hvilket element der skal ændres ved at kalde på id'et i HTML'en
 const ImgElement = document.getElementById("hygge");
 const titleElement = document.getElementById("title");
 const buttonElement = document.getElementById("laesMereKnap");
 
 
//Finder HTML-elementerne med id "venstrepil" og "hoejrepil". Tilføjer en event listener til hver knap. 
 document.getElementById("venstrepil").addEventListener("click", () => changeSlide(-1));
 document.getElementById("hoejrepil").addEventListener("click", () => changeSlide(1));
 
 //her bruges der en funktion til at skifte mellem billederne med parameteren direction
 function changeSlide(direction){
    

    //Funktionen tager en parameter direction, der enten er 1 (næste slide) eller -1 (forrige slide).
    //currentSlide opdateres ved at tilføje værdien af direction.
     currentSlide += direction;

   
     //her bruges if statement som enten viser det næste slide eller det forrige slide
     if(currentSlide >= slides.length) currentSlide = 0;
     if(currentSlide < 0) currentSlide = slides.length - 1;
 

     //her bruger vi variablerne og kalder på arrayet samt det aktuelle slide og slutter med . for at finde det rigtige element i arrayet
     ImgElement.src = slides[currentSlide].image;
     titleElement.style.color = slides[currentSlide].color;
     buttonElement.style.backgroundColor = slides[currentSlide].buttonColor;
     buttonElement.style.color = slides[currentSlide].buttonTextColor;
     buttonElement.href = slides[currentSlide].link;
     
     //her bruges der onclick til at finde linksene i arrayet 
     buttonElement.onclick = function(){
         window.location.href = slides[currentSlide].link;
     }
 
     //her bruges der onclick til at finde linksene i arrayet
     ImgElement.onclick = function(){
         window.location.href = slides[currentSlide].link;
     }
 
 }


 
 