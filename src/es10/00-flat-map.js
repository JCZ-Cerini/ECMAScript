// flat
const array = [1,1,2,3,4,[1,3,6,7,[4,7,9,3]]];
console.log(array.flat(2));

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));