// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'Oscar', age: 34,};
let {username, age} = user;
console.log(username, age);


// spread operator

let person = { name: 'Oscar', age: 28};
let country = 'MX';

let data = { id: 1, ...person, country };

console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 1, 2, 3,);

// Playground - Clase 9
export function solution(json1, json2) {
  let js1 = json1 || { name: "Mr. Michi", food: "Pescado"};
  let js2 = json2 || { age: 12, color: "Blanco"};

  return {...js1, ...js2}
}