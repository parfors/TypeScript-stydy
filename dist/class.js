"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Key = (function () {
    function Key(maxNum, minNum) {
        var randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
        this.signature = randomNumber;
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = (function () {
    function House(key) {
        this.key = key;
        this.isDoorOpen = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (!this.isDoorOpen) {
            throw new Error('The door is closed');
        }
        this.tenants.push(person);
        console.log('Person is in the House');
    };
    return House;
}());
var MyHouse = (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Wrong key');
        }
        this.isDoorOpen = true;
    };
    return MyHouse;
}(House));
var key = new Key(1, 3);
var key2 = new Key(1, 3);
console.log(key);
console.log(key2);
var person1 = new Person(key2);
console.log(person1);
var myHouse = new MyHouse(key);
console.log(myHouse);
myHouse.openDoor(person1.getKey());
myHouse.comeIn(person1);
//# sourceMappingURL=class.js.map