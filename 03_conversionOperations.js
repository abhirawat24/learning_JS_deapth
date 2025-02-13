let score = "33ababab"


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//  33ababab => NaN (Not a Number)
//  true => 1, false => 0
//  null => 0
//  undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "abhi" => true
// "" => false


let rendomNumber = 65432;

let StringOfNumber = String(rendomNumber);

console.log(rendomNumber);
console.log(typeof StringOfNumber);
