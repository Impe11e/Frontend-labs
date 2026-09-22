"use strict";

var element6 = document.getElementById("lab-item-6");

var element7 = document.querySelector("li.lab-item-7");

element6.addEventListener("click", function () {
    this.classList.toggle("highlight-id");
});

element7.addEventListener("click", function () {
    this.classList.toggle("highlight-class");
});