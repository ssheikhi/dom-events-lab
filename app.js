const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

let number1 = null;
let number2 = null;
let operator = "";


// Function to perform calculations based on the operator
function calculate(number1, number2, operator) {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "/":
            return number1 / number2
        case "*":
            return number1 * number2;
        default:
            return null;
    }
}

function resetFunction(){
    // console.log(`in reset function`);
    number1 = null;
    number2 = null;
    operator = "";
}
// Event listener for buttons
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.innerText;
        console.log(`buttonValue is ${buttonValue}`);        

        if (event.target.classList.contains('number')) {
            if (operator === "") {
                // If there's no operator yet, assign to number1
                number1 = Number(buttonValue);
                display.innerText = number1;
            } else {
                // If there's an operator, assign to number2
                number2 = Number(buttonValue);
                display.innerText = number2;
            }            
        }
        else if(buttonValue === 'C'){
            display.innerText ="";
            resetFunction(); 
        }
        else if (event.target.classList.contains('operator')) {
            operator = buttonValue;
        } 
        else if (event.target.classList.contains('equals') && number1 !== null && number2 !== null) {
            const result = calculate(number1, number2, operator);
            display.innerText = result;

            // Reset for the next calculation
            resetFunction()
        } 

    });
});
