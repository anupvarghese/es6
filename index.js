
// Arrow functions
// Everyone knows the usual arrow functions to use instead of 
// callbacks and stuffs. But there is one more thing arrow functions cover

// ES5 Code

console.log("==================Arrow functions===============")
var moduleA = {
  bar: 22,
  foo: function() {
    setTimeout(function() {
      console.log('ES5 : ' + this.bar);
    }
    .bind(this)  // Try with removing this line. It will show undefined because of the context binding issues
    , 1000); 
  }
}
moduleA.foo();

// ES6 
const moduleB = {
  bar: 22,
  foo: function() {
    setTimeout(() => {
      console.log(`ES6 : ${this.bar}`);
    },1000);
  }
}
moduleB.foo();

// Const and let
console.log('===============Const & let block scoping============')
// ES5
// in the below case constA is availble in function scope. There is no block scope for vars
var constA = 5;
if(true) {
  var constA = 10;
}

console.log('ES5 Const :', constA);

// ES6 
// Comes for rescue here use the same code as below works with let also
// Which means vars are the new lets (and try to use less vars => function scopes)
const es6constA = 5;
if(true) {
  const es6constA = 20;
}
console.log(`ES6 Const : ${es6constA}`);


// Modules 
console.log('===============Modules (See code)===================')
// This works only in CommonJS not in NodeJS at the moment (May be in V7)
// I will un-comment the below codes after that

// ES5 
// Typically in ES5 we used require add a module 
// for example in lodash

/* var loadash = require('lodash');
// then use as below,
var fooLodash5 = { a: 1, b: 2, c: 3};

console.log(loadash.omit(fooLodash5, ['a','b'])); */

//ES6 
// Above example will be alot cleaner in ES6 using modules

/*
import {omit} from 'loadash';
const fooLodash6 = { a: 1, b: 2, c: 3};
console.log(fooLodash6, ['a', 'b']); 
*/


// Iterators
console.log('=========Iterator & Generator functions===========');

function* fibonacci(limit = Infinity) {
  let [prev, next] = [0, 1];
  while(next < limit) {
    [prev, next] = [next, prev + next];
    yield next;
  }
}

for(let i of fibonacci(100)) {
  console.log(i);
}

//or call as below
console.log('=========Spread operator===========');
console.log([...fibonacci(200)]);


// concatenate arrays in es6
console.log('=========Array concatenation===========');
console.log([...[1,2],...[3,4]]);

// destructre to arguments
console.log('=========Arguments===========');
console.log(...fibonacci(30));

// some more destructuring
console.log('=========Destructuring===========');
const [a,...b] = [...fibonacci(30)]
console.log(a,...b);

//async operations two way communication
console.log('=========Two way communication using generators==========')
var app = clientApp();
app.next();

function apiCall(url) {
  const resp = `api response message from ${url}`;
  const p = new Promise((res, rej) => {
    setTimeout(() => {
      res(resp);
    }, 2000);
  });
  return p;
}

function download(url) {
  apiCall(url).then((data) => {
    app.next(data);
  })
}

function* clientApp() {
  const apiResp1 = yield download('/user/data/1');
  console.log(apiResp1);
  
  const apiResp2 = yield download('/user/data/2');
  console.log(apiResp2);
}