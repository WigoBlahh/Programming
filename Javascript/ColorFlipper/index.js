const btnFlip = document.getElementById("btnFlip");
const colorCode = document.getElementById("colorCode");

let red = "#FF0000";
let green = "#008000";
let hexColor = "#f0f8ff";

function SimpleFlip(){
    if(hexColor != green){
        hexColor = green;
        document.body.style.backgroundColor = hexColor;
        colorCode.innerHTML = hexColor;

    } else{
        hexColor = red;
        document.body.style.backgroundColor = hexColor;
        colorCode.innerHTML = hexColor;
    }
}

function HexFlip(){
    hexColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.body.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor;
}