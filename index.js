let colors = ['red', 'blue', 'green', 'yellow'];
let order = [];
let clickOrder = [];
let score = 0;
var time = 1000;

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let createOrder = () => {
    let randomColor = Math.floor(Math.random() * 4);
    order[order.length] = randomColor;

    order.forEach((element, index) =>{
        var color = document.querySelector(`.${colors[element]}`);
        lightColor(color, index + 1);
    });
}

let lightColor = (element, number) => {
    number = number * time;
    setTimeout( ()=> {
        element.classList.add("selected");
    }, number - time/2);
    
    setTimeout( ()=> {
        element.classList.remove("selected");
    }, number);
}

for(let i = 0; i<10; i++){
    createOrder();
}