let LOG = console.log;

const pizza = [
    {
        name: "pep",
        number: 3,
        price: 5
    },
    
    {
        name: "mushroom",
        number: 3,
        price: 5
    },
    {
        name: "mango",
        number: 3,
        price: 5
    }
    // "pep", "mushroom", "mango", "pineappple"
];

const [pep, mushroom] = pizza;

// console.log(pizza[0].name);

// console.log(pizza[0]);
// console.log(typeof pep);

/**
 * Object Destructuring
 */

 var pizzaObj = {
     pepp: "monday",
     array: [
         1,
         2,
         3
     ],
     funFunction: function(name){
         LOG(`I'm ${name}'s function`);
     }
 };

//  LOG(pizzaObj["array"]);
// pizzaObj.funFunction();
// const {peppStr,arrayArr, funFunction} = pizzaObj;

// funFunction("Victor");


var dogType = "pug";
var dog = {
    [dogType + 'Bark'] (){
        LOG("I'm a pug!");
    }
}
const {pugBark} = dog;
pugBark();