/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display ')
const buttonNumber = document.querySelectorAll('.button number')
/*-------------------------------- Variables --------------------------------*/

let number = undefined
let number2 = undefined
let operator = ""

 
function calculate(number,number2, operator){
    console.log('we are in calculate function')
    switch(operator) {
        case "+":
           display.innerText =  number + number2;
           console.log(`this is the display.innerText : ${display.innerText}`)
           break;
        case "-":
            display.innerText =  number - number2;
            break;
        case "/":
            display.innerText =  number / number2;
            break;
        case "*":
            display.innerText =  number * number2;
            break;
    }
    //clear variables
    number = undefined;
    number2 = undefined ;
    operator = "";
}

// building calculation functionality
buttons.forEach((button) => {
    console.log(`for each function`);
    button.addEventListener('click', (event) => {
        console.log(`first step number is ${number}`)
        display.innerText = button.innerText

        if (event.target.classList.contains('number') && number === undefined) {
            number = Number(button.innerText)
            console.log(`number is ${number}`)
        }
        else if(event.target.classList.contains('number')){
            console.log(`first step number2 is ${number2}`)
            number2 = Number(button.innerText)
            console.log(`number2 is ${number2}`)
        }
        else if (event.target.classList.contains('operator')) {
             operator = button.innerText
             console.log(`operator is ${operator}`)
        }
        else if (event.target.classList.contains('equals')) {
            console.log(`in if operator ${operator}`)
            calculate(number,number2, operator);
        }
    })
})