//todo)) OBJECTS -> key-value pairs

const obj = {
  key: 'value',
  // * here X is key and it's value is 1
  X: 1,
};

//* DOT Notation -> we can access the values of the keys
console.log(obj.X);
// /////////////////////////////////////////////////////////////////////

// const person = {
//   // value -> string
//   firstName: 'John',
//   lastName: 'Doe',
//   // value -> number
//   age: 36,
//   // value -> boolean
//   isDeveloper: false,
//   // value -> array
//   siblings: ['Bruce', 'Bob', 'Banner'],
// };

// console.log(person.age);
// console.log(person.lastName);
// console.log(person.siblings[1]);

// const person = {
//   // value -> string
//   firstName: 'John',
//   lastName: 'Doe',
//   // value -> number
//   age: 36,
//   // value -> boolean
//   isDeveloper: false,
//   // value -> array
//   siblings: ['Bruce', 'Bob', 'Banner'],
//   //value -> function
//   greet: function (name) {
//     return `Good Morning ${name}`;
//     // return 'Good Morning ' + name;
//     // console.log('Good Morning');
//   },
// };

// console.log(person.greet('Yatharth'));
// //////////////////////////////////////////////////////////////////
//* 📝 Template Literals -> way of concatenating strings

const str1 = 'Deadpool';
const str2 = 'Wolverine';

console.log(str1 + ' and ' + str2);
// after 2015 (ES6) -> modern JS
console.log(`${str1} and ${str2}`);
// //////////////////////////////////////////////////////////////////
const person = {
  // value -> string
  firstName: 'John',
  lastName: 'Doe',
  // value -> number
  age: 36,
  // value -> boolean
  isDeveloper: false,
  // value -> array
  siblings: ['Bruce', 'Bob', 'Banner'],
  //value -> function
  greet: function (name) {
    return `Good Morning ${name}`;
    // return 'Good Morning ' + name;
    // console.log('Good Morning');
  },
  //* Nested Objects -> objects inside objects
  obj1: {
    boss: 'Jason',
    designation: {
      role: 'Tech Lead',
      languages: ['Ruby', 'Golang', 'PHP'],
      hobbies: {
        indoor: 'Chess',
        outdoor: 'Basketball',
      },
    },
  },
  // ❓ Dynamic Keys -> keys are typed by user it is not hardcoded
  someKey: 'someValue',
};

console.log(person.obj1.designation.languages[1]);
console.log(person.someKey);
// Bracket Notation -> access dynamic keys
console.log(person['someKey']);

// Why Objects over Arrays ?
// const arr = ['John', 'Doe', 3, [4, 5, 6, ['Tech Lead', 8, 9]]];
// console.log(arr[3][3][0]);

// console.log(arr.flat(2));
////////////////////////////////////////////////////////
const objNew = {
  name: 'Yatharth',
  city: 'Hyderabad',
  age: 26,
  interests: ['something', 'anything'],
  extraObj: {
    key: 'someValue',
  },
};

//* change values inside keys using the same DOT notation
objNew.name = 'John Doe';
objNew.city = 'Bengaluru';
objNew.age = 28;
objNew.interests[0] = 'Anime';
objNew.interests[1] = 'Novels';

console.log(objNew);

// delete Object key-value
const newObj = delete objNew.city;
console.log(newObj);

delete objNew.name;
delete objNew.age;
delete objNew.extraObj;

console.log(objNew);
