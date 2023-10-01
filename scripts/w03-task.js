/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers (add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2) {
    return subtract1 - subtract2
}

function subtractNumbers (subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (factor1, factor2) {
    return factor1 * factor2
}

function multiplyNumbers (factor1, factor2) {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor) {
    return dividend / divisor
}
function divideNumbers (divideNumbers, quotient) {
    return divideNumbers + quotient
}
function divideNumbers (dividend, divisor) {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
var currentDate = new Date();
console.log(currentDate);

var year = currentDate.getFullYear();
console.log(year);
document.getElementById("year");


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.getElementById("Array");

/* Output Odds Only Array */
var oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0;
});
var oddsElement = document.getElementById("odds");

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)
var sumElement = document.getElementById("sumOfArray");

/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)
var multipliedElement = document.getElementById("multiplied");

/* Output Sum of Multiplied by 2 Array */
var result = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
console.log(result);
var sumOfMultipliedElement = document.getElementById("sumOfMultiplied");