let image = document.querySelector(".toggle-image");
let toggle = document.querySelector(".toggle")
let body = document.querySelector("body");
let mode = document.querySelector("#mode");
let button = document.querySelector(".new-quote");
let colorSwitch = document.querySelector(".color-switch");
let toggleCount = 0;
toggle.addEventListener("click", toggleMode);

function toggleMode() {
    if (mode.classList == "light") {
        toggleCount += 1;
        body.style.backgroundColor = "#1e1e1e";
        colorSwitch.style.color = "#f1f2f2";
        button.style.color = "#f1f2f2";
        image.src = "assets/images/sunnyWhite.png";
        mode.classList = "dark";
    } else if (mode.classList == "dark") {
        toggleCount -= 1;
        body.style.backgroundColor = "#fefffe";
        colorSwitch.style.color = "#0a0a0a";
        button.style.color = "#0a0a0a";
        image.src = "assets/images/moon.png";
        mode.classList = "light";
    }
};