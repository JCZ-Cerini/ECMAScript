function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Playground - Clase 16
export function* getId() {
  let value = 0;
  while (true) {
    value++
    yield value
  }
}