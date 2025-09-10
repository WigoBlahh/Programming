const nrBtn = document.querySelectorAll(".nrBtn");
const commaBtn = document.querySelector(".commaBtn")
const operatorBtns = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector(".equalBtn");
const clrBtn = document.querySelector(".clrBtn");
const calculation = document.getElementById("calculation");
const input = document.getElementById("input");

let equation = '';
let currentInput = '';

nrBtn.forEach(button =>{
    button.addEventListener('click', ()=>{
        let lastCharInput = currentInput.charAt(currentInput.length-1);
        equation += button.textContent;
        if(lastCharInput == '+' || lastCharInput == '-' || lastCharInput == 'x' || lastCharInput == '/'){
            currentInput = button.textContent;
        }else{
            currentInput += button.textContent;
        }
        calculation.textContent = equation;
        input.textContent = currentInput;
        console.log(equation);
    })
})

operatorBtns.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(equation === ''){
            if(button.textContent === '-'){
                equation += button.textContent;
                currentInput = button.textContent;
            }
        }else{
            let lastChar = equation.charAt(equation.length-1);
            if(lastChar != ',' && equation != '-'){
                if(lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == 'x'){
                    equation = equation.slice(0, equation.length - 1);
                    equation += button.textContent;
                    currentInput = button.textContent;
                }else{
                    equation += button.textContent;
                    currentInput = button.textContent;
                }
            }
        }
        input.textContent = currentInput;
        calculation.textContent = equation;
        console.log(equation);
    })
})

commaBtn.addEventListener('click', ()=>{
    let lastChar = equation.charAt(equation.length-1);
    console.log('Times , appears ' + currentInput.split(",").length - 1)
    if(currentInput.split(",").length - 1 == 0){
        if(equation.length != 0){
            if(lastChar != ','){
                if(lastChar != '+' && lastChar != '-' && lastChar != 'x' && lastChar != '/'){
                    equation += commaBtn.textContent;
                    currentInput += commaBtn.textContent;
                }
            }
        }
    }
    calculation.textContent = equation;
    input.textContent = currentInput;
    console.log(equation);
})

clrBtn.addEventListener('click', () => {
    equation = '';
    currentInput = '';
    calculation.textContent = equation;
    input.textContent = currentInput;
    console.log(equation);
})

equalBtn.addEventListener('click', () => {
    let lastChar = equation.charAt(equation.length-1);
    if(lastChar == '+' || lastChar == '-' || lastChar == 'x' || lastChar == '/' || lastChar == ','){
        equation = equation.slice(0, -1);
    }
    result = eval(equation.replaceAll(/x/g, '*'));
    input.textContent = result;
    equation = result.toString();
    currentInput = result.toString();
    console.log(result);
})