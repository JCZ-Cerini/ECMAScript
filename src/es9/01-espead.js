const user = {username: 'JCzCerini', age: 24, country: 'Arg'}
const { username, ...values } = user;
console.log(username);
console.log(values);