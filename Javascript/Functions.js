// todo)) Functions -> function keyword, anonymous function, variable expression

// Normal
// function greet() {
//   console.log('Good Morning');
// }

// greet();

// Variable Expression
const X = function greet() {
  console.log('Good Morning');
};

X();

// Anonymous inside variable
const anonSomething = function () {
  console.log('YOLO');
};

anonSomething();

// * CallBack Functions -> Functions passed as an argument in functions
// Template Literals -> `  ${}`

// function morning() {
//   console.log('Good Morning')
//   // return `Good Morning ${name}`;
//   // return 'Good Morning ' + name;
// }

// function afterNoon(name) {
//   return `Good AfterNoon ${name}`;
//   // return 'Good AfterNoon ' + name;
// }

// // Callback Now
// function greet(name, cb) {
//   return `${cb(name)}, my name is Yatharth`;

// }

// greet('Rohan', morning);

// console.log(morning('Yatharth'));
// console.log(afterNoon('Yatharth'));

//* Normal Function -> greet

function greet(name, callback) {
  console.log('Good Morning ' + name);
  callback();
}

//! Callback -> sayGoodBye
function sayGoodBye() {
  console.log('GoodBye');
}

// sayGoodBye is dependant on greet
greet('Rohan', sayGoodBye);
