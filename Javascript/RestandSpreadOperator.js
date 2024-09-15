//* Spread Operator -> syntax -> ...
//* Allows an iterable item to spread/expand individually inside receiver
// * Split into single items and make a copy of them

const youtube = 'mrbeast';
const letters = [...youtube]; // ✅
// const letters = ...youtube; // ❌✋🏼🛑 not an iterable

console.log(letters);
// -----------------------------------------------------
const boys = ['Bharadwaja', 'Ganesh', 'Rohit'];
const girls = ['Sudha', 'Vaishnavi'];
const besftfriend = 'Prabhas Garu';

// const friends = [boys, besftfriend, girls]; ❌
const friends = [...boys, besftfriend, ...girls];
console.log(friends);

// ------------------------------------------------------
// shallow copy of friends array -> same to same with previous array
// reference to the original ones
const newFriends = friends;
newFriends[0] = 'Manish';
console.log(newFriends[0]);

console.log(newFriends);
console.log(friends);
// ------------------------------------------------------
// Spread Operator for objects
const person = {
  name: 'John Doe',
  job: 'Developer',
};

const newPerson = {
  // person,
  ...person,
  city: 'Hyderabad',
  hobbies: ['COD', 'Drawing'],
};

console.log(newPerson);

//////////////////////////////////////////////////////////////////////////////////
//* Rest Operator -> syntax -> ...
//* Gathers/collects the items

////*rest in arrays -> gather remaining items in array
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...rest] = fruits;
// const [first, second, ...remainingfruits] = fruits;

console.log(first, second);
console.log(rest);

////* rest in objects -> gather key-value pairs in an object
const personNew = { job: 'Dev', name: 'John', lastName: 'Doe' };
const { job, ...restObjects } = personNew;

console.log(job);
console.log(restObjects);
