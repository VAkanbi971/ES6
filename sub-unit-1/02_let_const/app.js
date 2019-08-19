"use strict"

var a = "Test1";
var b = "Test2";

const testVar = () => {
    var a = 30;
    if (true) {
        let a = 50;
        console.log(a);
        a = 30;
    }
}


console.log('other A: ${a}');

testVar();