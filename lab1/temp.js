// const numbers = [2, 4, 6, 8, 10];

// const double = x => x * 2
// const doubledNumbers = numbers.map(double)
// console.log('Original Numbers:', numbers);
// console.log('Doubled Numbers:', doubledNumbers);
const person = { name: 'Alice', info: { age: 30, occupation: 'Engineer' } };

const { info: { age, occupation } } = person;

// console.log('Name:', name);
console.log('Age:', age);
console.log('Occupation:', occupation);