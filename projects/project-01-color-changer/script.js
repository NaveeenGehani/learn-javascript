const btn = document.getElementById("btn");
const colorBox = document.getElementById("color-box");
const body = document.body;

const colorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function colorChanger() {
    let bgColor = "";
    for (let i = 0; i < 6; i++) {
        const randNum = Math.floor(Math.random() * 16);
        bgColor += colorArray[randNum];
    }

    const hexColor = `#${bgColor}`;
    body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
    colorBox.textContent = hexColor;
}
