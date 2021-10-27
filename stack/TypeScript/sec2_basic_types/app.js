function add(num1, num2, showResult) {
    if (showResult) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var num1 = 5;
var num2 = 2.4;
var showResult = true;
add(num1, num2, showResult);
