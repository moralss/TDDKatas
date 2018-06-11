function stringCalculator(string) {
    if (string === "") {
        return 0;
    }
}


function convertToNumbers(string) {
    const arrayOfNumbers = [];

    const digits = string.match(/(\d)/g);
    for (let i in digits) {
        arrayOfNumbers.push(Number(digits[i]));
    }

    return arrayOfNumbers;
}


function multiply(stringOfNumbers) {
    return stringOfNumbers.reduce(function (a, b) {
        return a + b;
    }, 0);

}


module.exports = { stringCalculator, convertToNumbers, multiply }