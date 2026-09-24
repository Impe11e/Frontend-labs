"use strict";

var loadBtn = document.getElementById("loadBtn");
var statusEl = document.getElementById("status");
var resultsEl = document.getElementById("results");

loadBtn.addEventListener("click", function () {
    statusEl.textContent = "Downloading...";
    resultsEl.innerHTML = "";

    fetch("https://randomuser.me/api/?results=5")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            statusEl.textContent = "Success";
            renderUsers(data.results);
        })
        .catch(function (error) {
            statusEl.textContent = "Error loading data";
            console.error(error);
        });
});

function renderUsers(users) {
    users.forEach(function (user) {
        var card = document.createElement("div");
        card.className = "user-card";

        var lat = user.location.coordinates.latitude;
        var lng = user.location.coordinates.longitude;

        card.innerHTML =
            '<img src="' + user.picture.large + '" alt="' + user.name.first + '">' +
            '<div class="info">' +
                '<p><b>Cell:</b> ' + user.cell + '</p>' +
                '<p><b>Country:</b> ' + user.location.country + '</p>' +
                '<p><b>E-mail:</b> ' + user.email + '</p>' +
                '<p><b>Coordinates:</b> ' + lat + ', ' + lng + '</p>' +
            '</div>';

        resultsEl.appendChild(card);
    });
}