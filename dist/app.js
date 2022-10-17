"use strict";
var myAge = 14;
var age = 50;
var userName = "Dima";
var toggle = true;
var empty = null;
var notInitialized = undefined;
var callback = function (a) { return 100 + a; };
var anything = -20;
anything = "Hello";
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person = ['Max', 34];
var Enum;
(function (Enum) {
    Enum[Enum["ENABLE"] = 0] = "ENABLE";
    Enum[Enum["DISABLE"] = 1] = "DISABLE";
})(Enum || (Enum = {}));
;
var someVar;
var someVar2;
function showMessage(message) {
    console.log(message);
}
function calk(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error();
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
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
//# sourceMappingURL=app.js.map