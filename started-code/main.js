"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[1]);
        console.log(word.concat("Hey There"));
        console.log(word.slice(0));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        if (str.match(/[aeiou]/gi) == null) {
            console.log("0");
        }
        else {
            console.log(str.match(/[aeiou]/gi));
        }
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num % 2 != 0) {
            console.log(num + " is a Prime Number");
        }
        else {
            console.log(num + " is a Even Number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var result;
        if (num == 0) {
            result = 0;
        }
        else if (num % 9 == 0) {
            result = 9;
        }
        else {
            result = num % 9;
        }
        if (result == 1) {
            console.log(num + " is a magic number");
        }
        else {
            console.log(num + " is not a magic number");
        }
    };
    return NumbersManipulations;
}());
