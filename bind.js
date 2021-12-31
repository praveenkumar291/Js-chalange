// Bind method
// function submit() {
//   console.log("praveen")
// }
// const userComponent = {
//   render() {
//     this.submit();
//   }
// };
// let result = submit.bind(userComponent);
// result();
// call...................................................................
// let person = {
//   name:'praveen'
// }


// function sample(a, b, c) {
//  console.log("sample", a, b, c,this.name);
// }
// sample.call(person, 1, 2, 3);


// apply..........................................................
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(Math.max.apply(null,numbers))


// const sample = (name) => {
//   console.log("sample",name)
// }
// sample.apply(null,["praveen"])


// aSynchronous

// console.log("parveen")

// setTimeout(() => {

//   console.log('vijju');
//   console.log("harsha")
// }, 2000)

// console.log('bhargav');

// callBack & promise................................

// const p1 = Promise.resolve('my name is praveen ');
// const p2 = Promise.reject('Rejected');
// const p3 = 100;
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'Subscribe more up dates')
// });
// Promise.race([p1, p3, p4]).then((value) => console.log(value))
// Promise.allSettled([p1, p3, p4]).then((value) => console.log(value));
// Promise.any([p1, p3, p4]).then((value) => console.log(value));


// Array destructuring

// const myprograminglang=['js', 'jsx', 'php','pyton']
// let [a, b, c, d, ] = myprograminglang;
// console.log(`My fav prog lang is ${a} and ${d}`)


//object destructuring


const employee = {
  id: 1,
  age: 25,
  department: "UI/UX",
  adress: {
    city: "vspt",
    country: "Ind"
  },
};

const { name: fullName = "praveen kumar", age } = employee;
console.log(fullName);
console.log(age);
