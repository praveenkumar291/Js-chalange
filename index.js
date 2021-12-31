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

// const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100 ||(a-b)===100;

// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(10, 90));
// console.log(isEqualTo100(80, 20));
// console.log(isEqualTo100(10, 100));
// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(110, 10));

// const isMultiply100 = (a, b) => a === 100 || b === 100 || (a*b)===100;

// console.log(isMultiply100(10, 10));
// console.log(isMultiply100(5, 10));

// write a js program to get the file extension................................................................

// const fileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(fileExtension('index.html'));

// const fileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(fileExtension('praveen.pk'))................................................................

// write a javascript program  to get the current  date.

// const formDate = (date = new Date()) => {
//   const days = date.getDay();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const time = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${days}/${month}/${year}-${time}-${minutes}-${seconds}`;
// };

// console.log(formDate());



//  this key word

let person = {
  firstName: "praveen",
  getName: function () {
    console.log(this.firstName);
  },
};
person.getName();
// Call vs apply vs binding.................................


