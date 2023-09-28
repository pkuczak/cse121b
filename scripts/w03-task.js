/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumbers1 = Number(document.querySelector('#add1').value);
    let addNumbers2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumbers1, addNumbers2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
};

const multiplyNumbers = () => {
    let mulitplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(mulitplyNumber1, multiplyNumber2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    const divide = () => {
        return divideNumber1 / divideNumber2;
    };

    document.querySelector('#quotient').value = divide();
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter((number) => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter((number) => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((currentSum, nextNumber) => currentSum + nextNumber);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map((number) => number * 2).reduce((currentSum, nextNumber) => currentSum + nextNumber);