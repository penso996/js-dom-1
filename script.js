const lamp = document.getElementById("lamp");
const switchButton = document.getElementById("switchButton");

let state = false;
switchButton.addEventListener("click", function () {
    if (state) {
        lamp.src = "./img/white_lamp.png";
        switchButton.textContent = "Accendi";
        state = false;
    } else {
        lamp.src = "./img/yellow_lamp.png";
        switchButton.textContent = "Spegni";
        state = true;
    }
});