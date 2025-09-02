const btnIncrease = document.getElementById("btnIncrease");
const btnReset = document.getElementById("btnReset");
const btnDecrease = document.getElementById("btnDecrease");

const number = document.getElementById("number");

let count = 0;

function Increase(){
    count += 1;
    number.innerHTML = count;
}

function Decrease(){
    count -= 1;
    number.innerHTML = count;
}

function Reset(){
    count = 0;
    number.innerHTML = count;
}