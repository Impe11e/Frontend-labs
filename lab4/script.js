"use strict";

var element6 = document.getElementById("lab-item-6");

var element7 = document.querySelector("li.lab-item-7");

element6.addEventListener("click", function () {
    if (this.classList.contains("highlight-id")) {
        this.classList.remove("highlight-id");
        this.classList.add("highlight-class");
    } else {
        this.classList.remove("highlight-class");
        this.classList.add("highlight-id");
    }
});

element7.addEventListener("click", function () {
    if (this.classList.contains("highlight-class")) {
        this.classList.remove("highlight-class");
        this.classList.add("highlight-id");
    } else {
        this.classList.remove("highlight-id");
        this.classList.add("highlight-class");
    }
});

// task 2:

var btnAdd = document.getElementById("btnAdd");
var btnIncrease = document.getElementById("btnIncrease");
var btnDecrease = document.getElementById("btnDecrease");
var btnRemove = document.getElementById("btnRemove");

var imageContainer = document.querySelector(".image-controls").parentElement;
var originalImageWidth = 500;

function getLastImage() {
    var images = document.querySelectorAll(".myImage");
    return images[images.length - 1];
}

btnAdd.addEventListener("click", function () {
    var newImg = document.createElement("img");
    newImg.src = "images/nazare.jpg";
    newImg.alt = "Nazare, Portugal";
    newImg.width = originalImageWidth;
    newImg.className = "myImage";
    imageContainer.insertBefore(newImg, document.querySelector(".image-controls"));
});

btnIncrease.addEventListener("click", function () {
    var img = getLastImage();
    if (img) {
        img.width = img.width + 50;
    }
});

btnDecrease.addEventListener("click", function () {
    var img = getLastImage();
    if (img && img.width > 50) {
        img.width = img.width - 50;
    }
});

btnRemove.addEventListener("click", function () {
    var img = getLastImage();
    if (img) {
        img.remove();
    }
});