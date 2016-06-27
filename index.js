function* fibonacci(limit = Infinity) {
  let [prev, next] = [0, 1];
  while(next < limit) {
    [prev, next] = [next, prev + next];
    yield next;
  }
}

for(let i of fibonacci(100)) {
  console.log(i)
}
