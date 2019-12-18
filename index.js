// Import stylesheets
import "./style.css";
import {test} from './test.js'
import * as required from './test.js'


//Example for constants

// (function(){
// const a = 10;
// console.log('This is a constant variable : '+a);
// a= 20;
// console.log('Constant variable cannot be changed : '+a);
// })()


//examples for block scoping

// (function() {
//   for (let value = 0; value < 10; value++) {
//     console.log("This is within block scope " + value);
//   }
//   console.log("This is out of block scope " + value);
// })();

// {
//   function test(){
//     console.log('this function is in block scope')
//   }
// }

// test();



//examples for arrow functions

// function Greet() {
// debugger
//   this.message = 'hi, Good morning';

//   setTimeout(() => {
//     console.log(this.message);
//   }, 1000);

//   setTimeout(function(){
//     console.log('Without using arrow functions : '+this.message);
//   }, 1000);
// }

// var p = new Greet();

// var f = ()=>{console.log('Not a constructor function')};
// var a = new f();
// a();


//default parameters
// function defaultParam(x,y,z=10){
//   var sum = x+y+z;
//   return sum;
// }

// console.log(defaultParam(1,2,3));
// console.log(defaultParam(10,20));


//rest operator
// function restParam(a,b,...rest){
// return a+b+rest[2];
// }

// console.log(restParam(10,5,10,23,74,20));


//spread operator
// var msg = [35,20,30]

// function spreadOperator(a,b,c){
//   return Math.max(a,b,c)
// }

// console.log(spreadOperator(...msg));


//object properties
// var a = 12;
// var b = false;
// var c = 'Test';

// var obj = {a,b,c,greet(){console.log('Hello World')}};
// console.log(obj);


//destructuring assignment
// var a = [,5,32,41,2,5];
// var [one,two,...rest] = a;
// console.log(...rest)

// var [b=20,...rest] = a;
// console.log(b)

// var obj = {a:'helo',b:'hello',c:'hola'};

// var {x,b} = obj;
// console.log(b);



//classes

// class Greet{
//   constructor(name,message){
//     this.name = name;
//     this.message = message;
//   }

//   greet = ()=>{
//     return `hi ${this.name} , ${this.message}`
//   }

//   static staticMethod = (myName) =>{
//     return `Hi ${myName.name} ,I am static method. I am not 
//     accessable through instances`
//   }
// }

// var newGreet = new Greet('bandi', 'good morning');
// console.log(newGreet.greet());

// class updateGreet extends Greet {
//   constructor(name, message, updatedMessage) {
//     super(name, message);
//     this.updatedMessage = updatedMessage
//   }
//   greet = () => {
//     return `hi ${this.name} , ${this.message} ${this.updatedMessage}`
//   }
// }

// var updatedGreet = new updateGreet('xyz', 'Good Morning', 'have a nice day')
// console.log(updatedGreet.greet())


// var test = new Greet('Me')
// console.log(Greet.staticMethod(test))
// console.log(test.staticMethod(test))



//symbols

// var a = Symbol.for('test1');
// var b = Symbol.for('test2');

// console.log(a === b);
// console.log(Symbol.keyFor(a))
// console.log(Symbol.keyFor(b))


// var x = Symbol();
// var y = Symbol();
// var obj = {};
// obj[x] = 'hello';
// obj[y] = 'world';

// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));


console.log(test());

(function(){
  var radius = 45;
  var radiusSquare = required.square(radius);
  console.log(`Total area of a circle with radius '${radius}' is '${required.pi*radiusSquare}'  sq units`);
})()