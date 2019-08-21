"use strict"

var a = "Test1";
var b = "Test2";

a => a+=a;


const testVar = () => {
    const a = 30;

    if (true) {
        let a = 50;
        console.log(a);
        a = 30;
    }
}


console.log('other A: ${a}');

testVar();  
