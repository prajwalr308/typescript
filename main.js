"use strict";
exports.__esModule = true;
var message = "hello";
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'prajwal';
var sentence = "my name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["m", 22];
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 2] = "red";
    Colors[Colors["green"] = 3] = "green";
    Colors[Colors["blue"] = 4] = "blue";
})(Colors || (Colors = {}));
var c = Colors.green;
console.log(c);
var random = 10;
random = true;
var myVariable = 10;
var person = {
    name: "yyy",
    age: 30
};
//better 
var persons = {
    namey: "ss",
    age: 30
};
var tuple;
tuple = ["a", 2];
function combine(a, b) {
    var result;
    if (typeof a === 'number' && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
console.log(combine(20, "s"));
