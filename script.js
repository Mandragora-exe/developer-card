const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

let licznik = 0;

factButton.addEventListener("click", function () {
    licznik++;
    bio.textContent = "Ta treść została zmieniona przez JavaScript.";
    factButton.textContent = "Kliknięcia: " + licznik;
});