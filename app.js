var firstInput = document.querySelector("#num1");
var secondInput = document.getElementById("num2");
var button = document.querySelector("button");
button.addEventListener("click", onClick);
function add(num1, num2) {
    var add = num1 + num2;
    return add;
}
function onClick() {
    console.log(add(+firstInput.value, +secondInput.value));
}
