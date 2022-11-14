const button = document.getElementById("btn")

const colors = [
    "#FF57333", 
    "#F9FF33", 
    "#3371FF",
    "red", 
    "green", 
    "rgb(85, 255, 51)"
];
const hex = [
    "0",
    "1", 
    "2",
    "3",
    "4",
    "5",
    "6", 
    "7", 
    "8", 
    "9", 
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F"
]

button.addEventListener("click",() => {
    let hexColor = colors[getRandomNumber()]
   document.body.style.backgroundColor = colors[getRandomNumber()]
   colors.textContent = hexColor
});

function generateHex() {
    let hexColor = "#";
    for (let i = 0; i  < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor;
}

function getRandomNumber () {;
    return Math. floor(Math.random() * hex.length);
}
