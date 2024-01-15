let colors = ['red', 'blue', 'green', 'yellow'];
let gameOrder = [];
let clickOrder = [];
let score = 0;
var time = 1000;

// const red = document.querySelector(".red");
// const blue = document.querySelector(".blue");
// const green = document.querySelector(".green");
// const yellow = document.querySelector(".yellow");

let createOrder = () => {
    let randomColor = Math.floor(Math.random() * 4);
    gameOrder[gameOrder.length] = randomColor;

    gameOrder.forEach((element, index) =>{
        var color = document.querySelector(`.${colors[element]}`);
        lightColor(color, index + 1);
    });
}

let lightColor = (element, index) => {
    console.log('Element:', element);
    index = index * time;
    setTimeout( ()=> {
        element.classList.add("selected");
    }, index - time/2);
    
    setTimeout( ()=> {
        element.classList.remove("selected");
    }, index);
}

let checkOrder = () => {
    for(let i in clickOrder){
        if (clickOrder[i] != gameOrder[i]){
            gameOver();
            break;
        }
        score ++;
    }
    if(clickOrder.length == gameOrder.length){
        alert(`SCORE: ${score}`);
        nextLevel();
    }
}

// let click = (color) =>{
//     clickOrder[clickOrder.length] = color;
// }


// for(let i = 0; i<10; i++){
//     createOrder();
// }

let gameOver = () =>{
    alert(`Game Over! \n Score: ${score}`);
    gameOrder = [];
    clickOrder = [];
    startGame();
}
// function click(){
//     document.querySelectorAll("div")
//             .forEach((element)=>{
//                 element.addEventListener("click", function(event){
//                     colorClicked = event.srcElement.classList.value;
//                     console.log(colorClicked, getNumber(colorClicked));
//                 });
//             })
// }

let clickArray = (colorClicked) => {
    numberClicked = getNumber(colorClicked);
    if(numberClicked === undefined){
        return;
    }
    clickOrder.push(numberClicked);
    divElement = document.querySelector(`.${colorClicked}`)
    divElement.classList.add("selected");
    setTimeout(()=>{
        divElement.classList.remove("selected");
    },150);
    
}


function click(){
    document.addEventListener("click", function(event){
        colorClicked = event.srcElement.classList.value;
        clickArray(colorClicked);
    });
}
function getNumber(color){
    var colorNumber = {
        "red" : 0,
        "blue" : 1,
        "green" : 2,
        "yellow" : 3,
    };
    return (colorNumber[color]);
}

var arrays = [];
// createOrder();
click();