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

const p1 = Promise.resolve('my name is praveen ');
const p2 = Promise.reject('Rejected');
const p3 = 100;
const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Subscribe more up dates')
});
Promise.race([p1, p3, p4]).then((value) => console.log(value))
Promise.allSettled([p1, p3, p4]).then((value) => console.log(value));
Promise.any([p1, p3, p4]).then((value) => console.log(value));
