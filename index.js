//  ADD two  numbers
// const x = 5;
// const y = 6;

// const z = x + y;
// console.log(z)................................................................

// let a = 5;
// a = 7;
// s = a + a;
// console.log(s)................................................................

// Static numbers adding................................................................

// let a = 10;
// b = 12;
// z = a + b;

// console.log(z)...............................................

// dynamic add numbers ........................................

// let a = prompt("plese enter first number");
// let b = prompt("plese enter second number");
// var c = parseInt(a) + parseInt(b);

// console.log(c);

// dynamic multi to numbers ................................

// let a = prompt("plese substract first number");

// let b = prompt("plese substract second number");
// var c = parseInt(a) * parseInt(b);
// console.log(c);.............................................


// write a java script program to check the two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(10, 90));
console.log(isEqualTo100(80, 20));
console.log(isEqualTo100(10, 100));
console.log(isEqualTo100(100, 0));
