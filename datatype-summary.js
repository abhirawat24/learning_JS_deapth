//types of data in JavaScript are of two types Primitive and Nonprimitive

// Primitive
// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const marks = 67
const markScored = 78.34

const liveStatus = true

const temp = null
let userEmail;

const id = Symbol('543')
const id2 = Symbol('543')

console.log(id === id2);
//two different ids are not equal even if the values are equal

const BigNum = 1234567899876543;

console.log(BigNum);


// Reference (Non - Primitive)
// Array, Objects, Functions


//Array
const names = ["Abhi", "Prateek", "Zaid"];
console.log(names)


//Objects
let firstObj = {
    name: "Abhishek",
    age: 24,

}
console.log(firstObj);

//Function
const myFunction = function(){
    console.log("Hello")
}

console.log("Datatype of number: " + typeof marks)  //number
console.log("Datatype of number with decimal: " + typeof markScored)  //number
console.log("Datatype of Boolean: " + typeof liveStatus)  //boolean
console.log("Datatype of null: " + typeof temp)  //object
console.log("Datatype of not defined: " + typeof userEmail)  //undefined
console.log("Datatype of Symbol: " + typeof id)  //symbol
console.log("Datatype of Symbol: " + typeof id2)  //symbol
console.log("Datatype of BigInt: " + typeof BigNum)  //number
console.log("Datatype of Array: " + typeof names)  //object
console.log("Datatype of Object: " + typeof firstObj)  //object
console.log("Datatype of Function: " + typeof myFunction)  // function
