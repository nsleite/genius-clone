let colors = ['red', 'blue', 'green', 'yellow'];
let gameOrder = [];
let clickOrder = [];
let score = 0;
var time = 1000;
var happening = false;
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let createOrder = () => {
    let randomColor = Math.floor(Math.random() * 4);
    gameOrder[gameOrder.length] = randomColor;

    gameOrder.forEach((element, index) =>{
        var color = document.querySelector(`.${colors[element]}`);
        lightColor(color, index + 1);
    });
}

let lightColor = (element, index) => {
    index = index * time;
    setTimeout( ()=> {
        element.classList.add("selected");
    }, index - time/2);
    
    setTimeout( ()=> {
        element.classList.remove("selected");
    }, index);
}

let checkOrder = () => {
    for(let i in gameOrder){
        console.log(gameOrder, clickOrder);
        if (clickOrder[i] !== gameOrder[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == gameOrder.length){
        alert(`SCORE: ${score}\n Next level...`);
        nextLevel();
    }
}

let nextLevel = () => {
    score +=1;
    clickOrder = [];
    createOrder();
}

let gameOver = () =>{
    alert(`Game Over! \n Score: ${score}`);
    score = 0;
    gameOrder = [];
    clickOrder = [];
    startGame();
}

let click = (colorNumber) => {
    clickOrder[clickOrder.length] = colorNumber;
    getColor(colorNumber).classList.add("selected");
    setTimeout(()=>{
        getColor(colorNumber).classList.remove("selected");
        checkOrder();
    },150);
}

function getColor(number){
    var numberColor = {
        0 : red,
        1 : blue,
        2 : green,
        3 : yellow
    }
    return (numberColor[number]);
}

let startGame = ()=>{
    // alert("welcome, lets play!")
    nextLevel();
}
startGame();

red.onclick = () => click(0);
blue.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);