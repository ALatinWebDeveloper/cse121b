/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}



function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
let subtract = function (subtract1, subtract2){
    return subtract1 - subtract2;
}

let difference = function(){
    let subtractNumbers1 = Number(document.querySelector("#subtract1").value);
    let subtractNumbers2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumbers1, subtractNumbers2);
    
}

document.querySelector("#subtractNumbers").addEventListener("click", difference);


/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    let multiplyNumbers1 = Number(document.querySelector("#factor1").value);
    let multiplyNumbers2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumbers1, multiplyNumbers2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = function (dividend, divisor) {
    return dividend / divisor;
}

let divideNumber = function () {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumber);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function() {

    let subTotal = Number(document.querySelector("#subtotal").value);

    if (document.querySelector("#member").checked) {
        subTotal = subTotal * 0.8;
    }

    subTotal = subTotal.toFixed(2);

    document.querySelector("#total").innerHTML = `$ ${subTotal}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArrays =  [1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numberArrays;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numberArrays.filter(odds);

function odds(number) {
    remainder = number % 2;
    if (remainder == 1) {
        return number;
    }
}
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numberArrays.filter(evens);

function evens(number) {
    remainder = number % 2;
    if (remainder == 0) {
        return number;
    }
}
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numberArrays.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numberArrays.map((number => number * 2));

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numberArrays.map((number => number * 2)).reduce((sum, number) => sum + number);