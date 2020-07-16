const calculatorScreen= document.querySelector(".calculator-screen");

const updateScreen= (number)=> {
    calculatorScreen.value= number;
}


const numbers= document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
    
})

let prevNumber="";
let calculationOperator="";
let currentNumber="0";

const inputNumber=(number) =>{
    if (currentNumber === '0'){
        currentNumber= number;
    } else {
        currentNumber += number;
    }
    
}

const operators= document.querySelectorAll(".operator");

operators.forEach((operator)=> {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// ini diupdate 
const inputOperator=(operator)=>{
    if (calculationOperator ==="") {
        prevNumber=currentNumber;
    }
    // tadinya prevNumber=currentNumber; di line ini
    calculationOperator=operator;
    //tadinya kosong
    currentNumber="0";
}

//ini diupdate dari parseInt menjadi parseFloat
const calculate= () => {
    let result="";
    switch(calculationOperator) {
        case "+":
            result= parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result= parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result= parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result= parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
        
    }
    
    currentNumber=result;
    calculationOperator="";

}

// tadinya equalSign ada di atas function calculate

const equalSign=document.querySelector(".equal-sign");

equalSign.addEventListener("click", ()=>{
    calculate();
    updateScreen(currentNumber);
})

//ini diupdate
const clearBtn= document.querySelector(".all-clear");

clearBtn.addEventListener("click", ()=>{
    clearAll();
    updateScreen(currentNumber);
    // console.log("AC button is pressed");
})

const clearAll=()=>{
    prevNumber="";
    calculationOperator="";
    currentNumber="0";
}

//ini di update
const decimal=document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    //console.log(event.target.value);
})

inputDecimal=(dot)=> {
    if(currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
}

