"use strict";
exports.__esModule = true;
var fs = require("fs");
var testInput = fs
    .readFileSync("test.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map(function (v) { return parseInt(v); });
console.log(testInput);
var day1Input = fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map(function (v) { return parseInt(v); });
var counter = 0;
var depth = 0;
for (var _i = 0, day1Input_1 = day1Input; _i < day1Input_1.length; _i++) {
    var elem = day1Input_1[_i];
    if (elem > depth) {
        counter++;
    }
    depth = elem;
}
console.log(counter - 1);
var depthWindow = 0;
counter = 0;
for (var i = 0; i < (day1Input.length - 2); i++) {
    var newWindow = day1Input[i + 2] + day1Input[i + 1] + day1Input[i];
    if (i != 0 && newWindow > depthWindow) {
        counter++;
    }
    depthWindow = newWindow;
}
console.log(counter);
