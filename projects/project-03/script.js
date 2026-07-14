const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const colorName = document.getElementById("color-name");
const body = document.body;
let intervalId = null;

function changeBg() {
    let bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = bgColor;
    colorName.textContent = `Bg-color : ${bgColor}`;
}

startBtn.addEventListener("click", () => {
    // if start button is not cicked then do not try to clear the interval.
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(changeBg, 1000);
});

stopBtn.addEventListener("click", () => {
    // if there is an interval Id then try to remove that interval.
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
resetBtn.addEventListener("click", () => {
    window.location.reload();
})