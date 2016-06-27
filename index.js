function* fibonacci(limit = Infinity) {
  let [prev, next] = [0, 1];
  while(next < limit) {
    [prev, next] = [next, prev + next];
    yield next;
  }
}
// iterator
console.log('=========Iterator===========');
for(let i of fibonacci(100)) {
  console.log(i);
}

//or call as below
console.log('=========Spread operator===========');
console.log([...fibonacci(200)]);


// concate arrays in es6
console.log('=========Array concat===========');
console.log([...[1,2],...[3,4]]);

// to arguments
console.log('=========Arguments===========');
console.log(...fibonacci(30));

// some more destructuring
console.log('=========Destructuring===========');
const [a,...b] = [...fibonacci(30)]
console.log(a,...b);

//async operations two way communication

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



