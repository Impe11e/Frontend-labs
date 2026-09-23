"use strict";

function validateForm(form) {
    var patterns = {
        pib: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
        group: /^[А-ЯІЇЄҐA-Z]{2}-\d{2}$/,
        faculty: /^[А-ЯІЇЄҐA-Zа-яіїєґa-z\s]{2,}$/,
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
    }

    return false;
}