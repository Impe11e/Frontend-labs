"use strict";

function validateForm(form) {
    var patterns = {
        pib: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
        group: /^[А-ЯІЇЄҐA-Z]{2}-\d{2}$/,
        faculty: /^[А-ЯІЇЄҐA-Z]{1,4}$/,
        address: /^м\.\s?[А-ЯІЇЄҐA-Zа-яіїєґa-z\-]+$/,
        telegram: /^@[A-Za-z0-9_]{4,32}$/
    };

    var isValid = true;

    for (var fieldName in patterns) {
        var input = document.getElementById(fieldName);
        var value = input.value.trim();
        var regex = patterns[fieldName];

        if (!regex.test(value)) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    }

    if (isValid) {
        var pib = document.getElementById("pib").value;
        var group = document.getElementById("group").value;
        var faculty = document.getElementById("faculty").value;
        var address = document.getElementById("address").value;
        var telegram = document.getElementById("telegram").value;

        var resultWindow = window.open("", "Результат", "width=400,height=300");
        resultWindow.document.body.innerHTML =
        "<h2>Введені дані</h2>" +
        "<p><b>ПІБ:</b> " + pib + "</p>" +
        "<p><b>Група:</b> " + group + "</p>" +
        "<p><b>Факультет:</b> " + faculty + "</p>" +
        "<p><b>Адреса:</b> " + address + "</p>" +
        "<p><b>Telegram:</b> " + telegram + "</p>";
        form.reset();
    }
    return false;
}

var TOTAL_CELLS = 36;
var TARGET_NUMBER = 5;
var ROWS = 6;
var COLS = 6;

var table = document.getElementById("grid");
var colorPicker = document.getElementById("colorPicker");

var counter = 1;
for (var r = 0; r < ROWS; r++) {
    var row = document.createElement("tr");
    for (var c = 0; c < COLS; c++) {
        var cell = document.createElement("td");
        cell.textContent = counter;
        cell.id = "cell-" + counter;
        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}

var targetCell = document.getElementById("cell-" + TARGET_NUMBER);

targetCell.addEventListener("mouseover", function () {
    var randomColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    this.style.backgroundColor = randomColor;
});

targetCell.addEventListener("click", function () {
    this.style.backgroundColor = colorPicker.value;
});

targetCell.addEventListener("dblclick", function () {
    var chosenColor = colorPicker.value;
    for (var i = 1; i <= TOTAL_CELLS; i++) {
        if (i !== TARGET_NUMBER) {
            document.getElementById("cell-" + i).style.backgroundColor = chosenColor;
        }
    }
    this.style.backgroundColor = "";
});