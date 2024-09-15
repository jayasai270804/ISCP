//* Higher Order Functions -> main functions in which callbacks are passed
//*//? ALL OF THEM ARE ITERATED IN A LOOP 📝📝
//* 1) forEach
//* 2) map
//* 3) filter
//* 4) find

//* Array of Objects -> usually APIs are written in this format
//* 1) forEach
//! forEach does not return a new array
// const people = [
//   { name: 'John Doe', age: 30, role: 'Developer' },
//   { name: 'Susan', age: 38, role: 'Tech Lead' },
//   { name: 'Oliver', age: 22, role: 'UI/UX Designer' },
// ];

// function showPerson(person) {
//   console.log(person.role.toUpperCase());
// }

// people.forEach(showPerson);
// people.forEach(function showPerson(person) {
//   console.log(person.role.toUpperCase());
// });

// people.forEach((person) => {
//   console.log(person.role.toUpperCase());
// });
// ------- simplified example --------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach(function printNumber(num) {
//   console.log(num.toString());
// });
///////////////////////////////////////////////////////////////
//* 2) map
//* MAP -> it also runs in a loop like forEach
// * It returns a new array
const people = [
  { name: 'John Doe', age: 30, role: 'Developer' },
  { name: 'Susan', age: 38, role: 'Tech Lead' },
  { name: 'Oliver', age: 22, role: 'UI/UX Designer' },
];

people.map(function ageOfPerson(person, index) {
  console.log(person.age * 2);
  console.log(index);
  // console.log(person.name);
  // console.log(person);
});

people.map((person) => {
  console.log(person.age * 2);
  // console.log(person.name);
  // console.log(person);
});
// ----------------------------------------------------------------
// ✏️ Change the strings to uppercase and add 50 to existing numbers
// use map or forEach
const pokemons = [
  { name: 'Pikachu', evolution: 'Raichu', stats: 545 },
  { name: 'Charmandar', evolution: 'Charmeleon', stats: 101 },
  { name: 'Bulbasaur', evolution: 'Venusaur', stats: 102 },
  { name: 'Squirtle', evolution: 'Wartortole', stats: 99 },
];
