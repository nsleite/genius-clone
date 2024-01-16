let colors = ['red', 'blue', 'green', 'yellow'];
let gameOrder = [];
let clickOrder = [];
let score = 0;
var time = 1000;
var clickCount = 0;
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
    if(clickOrder.length != gameOrder.length){
        return;
    }
    for(let i in gameOrder){
        if (clickOrder[i] !== gameOrder[i]){
            gameOver();
            break;
        }
    }
    alert(`SCORE: ${score}\n Next level...`);
    nextLevel(); 
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

function click (event, colorNumber){
    clickOrder[clickOrder.length] = colorNumber;
    getColor(colorNumber).classList.add("selected");
    setTimeout(()=>{
        getColor(colorNumber).classList.remove("selected");
        checkOrder();
    },250);
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
    alert("welcome, lets play!")
    nextLevel();
}
startGame();

red.addEventListener("click", (event) => {
    event.preventDefault();
    click(event,0)
    }) ;
blue.addEventListener("click", (event) => {
    event.preventDefault();
    click(event,1)
    }) ;
green.addEventListener("click", (event) => {
    event.preventDefault();
    click(event,2)
    }) ;
yellow.addEventListener("click", (event) => {
    event.preventDefault();
    click(event,3)
    }) ;
