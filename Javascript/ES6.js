//* truthy and falsy values
// " ",' ', ` ` -> truthy
//  0, -0, NaN, false, null, undefined -> falsy

const text = undefined;

if (text) {
  console.log('Hey, this value is truthy');
} else {
  console.log('Hey, this value is falsy');
}
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// * ES6 -> EcmaScript 2015 -> Modern JS

// 1) introduction of let & const
// 2) === operator and ternary operator
// 3) Destructuring
// 4) Rest Operator
// 5) Spread Operator

// const str = ' sjcshcsdc'
// console.log(typeof str)

//* === -> strictly equal operator
const num1 = 1;
const num2 = '1';
console.log(typeof num1);
console.log(typeof num2);

if (num1 === num2) {
  console.log('this is true');
} else {
  console.log('this is false');
}
////////////////////////////////////////////////////////////
//* Destructuring in Array -> access/unpacking values from arrays
// * faster/easier alternative for accessing values and putting it into variables
// syntax -> const [] = arrayName

const fruits = ['orange', 'mango', 'banana', 'lemon'];

// console.log(fruits[1]);
// console.log(fruits[3]);

// const first = fruits[0];
// console.log(first);

// const [firstFruit, second, monkeyEats] = fruits;
// const [, , third, ] = fruits;
// const [, second, , sourFruit] = fruits;

// console.log(firstFruit);
// console.log(second);
// console.log(monkeyEats);
// console.log(second);
// console.log(sourFruit);

const friends = ['Joe', 'Van Helsing', 'Dracula', 'Wolf'];

// const [first, second, third, fourth] = friends;
const [, second, , fourth] = friends;

console.log(fourth);
console.log(second);

//////////////////////////////////////////////////////////////////////////
// * Destructuring in Objects
// syntax -> const {} = objectName
const bob = {
  firstName: 'Bob',
  lastName: 'Builder',
  city: 'Chicago',
  siblings: {
    sister: 'Jane',
  },
};
// console.log(bob.firstName);
// console.log(bob.city);

// const { firstName, city, siblings } = bob

const {
  firstName: goodName,
  city,
  // more destructuring for nested object
  siblings: { sister },
} = bob;

console.log(goodName);
console.log(city);
console.log(sister);

const simpleObject = {
  //! name -> newName
  name: 'Jonathan',
  //! age -> newAge
  age: 24,
  skill: ['ReactJS', 'VueJS'],
  // * oldJobs -> newJobs
  //! destructure -> 'someCompany'
  oldJobs: {
    lead: 'someCompany',
  },
};

const {
  name: newName,
  age: newAge,
  oldJobs: { lead },
} = simpleObject;

console.log(newName);
