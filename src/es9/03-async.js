async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('Hello!');

async function arraysOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arraysOfNames(['Oscar', 'Juan Cruz', 'David']);
console.log('After');