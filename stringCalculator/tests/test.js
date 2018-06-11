const assert = require('assert');
const expect = require('chai').expect;
const fileToTest = require('../stringCalculator');



describe("string calculator", function () {
    it("empty string should return 0", function () {
        const emptyString = fileToTest.stringCalculator("");
        expect(emptyString).to.be.eql(0);
    })
    it("get numbers in string" , function(){
        const findNumbers = fileToTest.convertToNumbers("1,2");
        expect(findNumbers).to.be.eql([1,2]);
    })    

    it("multiply values to get sum" , function(){
        const multiplyArray = fileToTest.multiply([1,2]);
        expect(multiplyArray).to.be.eql(3);
    })
})