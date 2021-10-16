"use strict";
var count = 0;
count += 1;
var message = "Hello world";
var done = true;
var numbers = [1, 2, 3];
var messages = ["Hello", "world"];
messages.push("2");
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = "red";
color = "yellow";
// 함수 작성
function sum(x, y) {
    return x + y;
}
var result = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
// if return nothings, it gives a void
function returnNothing() {
    console.log("bla bla");
}
returnNothing();
