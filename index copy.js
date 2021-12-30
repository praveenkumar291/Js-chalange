// const person = [1,2,3,4]
const person = ["pravi", 25];

const [name, age] = person;
console.log(name);
console.log(age);

// var person = {
//   name: "pravi",
//   age: 25,
// };
// // var name = person.name;
// // var age = person.age;

// var { name, age } = person;
// console.log(name);
// console.log(age);
// function add(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// // function sum(a,b) {
// //   console.log(a+b);
// // }

// let addByTwo = add(2);

// addByTwo(5);
// addByTwo(10);

// console.log(hi);
// Var,let,const,
// let age = 30;
// age = 31;

// console.log(age)
//string ,Number,boolean,Undefined,
// const name = "praveen"
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);
// console.log('my name is'praveen);

//concatination...............1

// const name = "praveen";
// const age = 24;

// console.log('My name is ' + name + ' and I am ' + age);

// const name = "praveen";.........2
// const age = "30";
// const location = "visakhpatnam";

// console.log('My NAME is ' + name + ' and I am ' + age + 'My loaction' + location);

// ............................................................

// using templete String

// const name = "praveen";
// age = "30";

// const person = `My NAME is ${name} and I am ${age}`;
// console.log(person)

//find the length of the string

// const name = "praveen";
// console.log(name.length);

//find tyepe of String..............................................

// console.log(typeof (name))/................................................................

// console.log(name.toUpperCase());

//subString................................

// const s = 'HEllO world'

// console.log(s.substring(0,5).toUpperCase());

//splict methode................................................................
// const s = "Hello world,computer world,"

// console.log(s.split(","));

// ......................
// Arrays-variables that holds multiple values

// const number = new Array(1, 2, 3, 4, 5);
// console.log(number)////////////////////////////////

// const fruits = ['apple', 'orange', 'pears',10,20];

// fruits[4] = 'grapes';

// fruits.push("praveen") push methode is used  to any push into the array

// fruits.unshift('vijay') this methode is used to begning into the array.

// fruits.pop();//
// console.log(fruits);

// object Array.......................

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   adress: {

//     street: 'Bc road',

//     city: 'vspt',
//     state:'Ap'
//   }

// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies[2]);

// console.log(person.adress.city);

const todos = [
  {
    id: 1,
    text: "take out trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "meating with boss",
    isComplete: true,
  },
  {
    id: 3,
    text: "doctor apt",
    isComplete: true,
  },
  {
    id: 4,
    text: "metaing with friend",
    isComplete: false,
  },
  {
    id: 5,
    text: "chit cat with friend",
    isComplete: false,
  },
];

// console.log(todos)

// convert To JSON format................................................................

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON)

//For Loop.......................

// for (let i = 0; i <= todos.length; i++) {
//   console.log(todos[i].text);
// }

//another way to

// for (let todo of todos) {
//   console.log(todo);
// }
// }basic for loop over

//suppose we add forloop nuber by using temlete string
// for (let i = 0; i <= 10; i++){

//   console.log(`praveen ${i}`)
// console.log('praveen'+ i)
// }

//while loop
// let i = 0;
// while (i < 10) {
//   console.log(`whileloopNumber:${i}`);
//   i++;
// }.........................................................................

//Higher order array methodes..............................

//forEach

// todos.forEach((todo) => {

//   console.log(todo)
//   })

//map function...........................

// todos.map((todo) => {
//   console.log(todo.isComplete)
// })

//filter function................................

// todos.filter((todo) => {
//   console.log(todo)
// })

///if function...........................

// const x = 11;

// if (x === 10) {
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is grater then 10');
// } else {
//   console.log('x is less then 10')
// }

// const name = 'praveen';

// if (name === 'praveen'){

//   console.log('Name is praven');
// } else {
//   console.log("name is not praveen")
// }

// const x = 4;
// const y = 10;
// if (x > 5 || y > 10) {

//   console.log("x is more then 5 and y is more then 10");

// } else {

//   console.log("x is less then 5 and y is less then 10");
// }................................................................

// ....................................................................
//SWITCH
// const x = 8;
// const color = x > 10 ? 'red' : 'blue';

// switch (color) {

//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue')

// }

// ...........................................................................................

// function:................................................................

// function addNums(num1, num2){
//   console.log(num1+num2)
// }
// addNums(2, 3);

// function substract(num1, num2) {

//   console.log(num1-num2)
// }
// substract(20, 10)

// function multiple(num1, num2) {

//   console.log(num1*num2)
// }
// multiple(3, 3)

// function devided(num1, num2) {
//   console.log(num1/num2)
// }

// devided(10,2)

//using return type....................
// function addNums(num1, num2) {

//   return num1+num2;
// }
// console.log(addNums(3,5))

//Objected oriented programing for

const companies = [
  {
    name: "Company one",
    category: "finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company four",
    category: "finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company three",
    category: "electrical",
    start: 1992,
    end: 2008,
  },
  {
    name: "Company five",
    category: "mech",
    start: 1999,
    end: 2007,
  },
  {
    name: "Company six",
    category: "chemical",
    start: 1987,
    end: 2010,
  },
  {
    name: "Company nine",
    category: "finance",
    start: 1981,
    end: 1989,
  },
];
const age = [33, 47, 23, 67, 39, 45, 25, 48, 45, 76, 98];

// for (let i = 0; i < companies.length; i++){
//   console.log()
// }

// companies.map((company) => {
//   console.log(company)
// })
///ForEach
// companies.forEach((company) => {

//   console.log(company)
// })

// const canDrink = age.filter(ages => ages >= 67);

// console.log(canDrink)

// const year = companies.filter(company => company.name === "Company one");

// console.log(year);

// const eightyes = companies.filter(company => (company.start >= 1980 && company.end <= 2000))

// console.log(eightyes)
