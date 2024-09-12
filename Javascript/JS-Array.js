//* Array Methods

//length
// console.log(names[names.length - 1]);

// concat -> join two array without adjusting 2 arrays in 1
// const arr1 = [1, 2, 'Julio'];
// const arr2 = [3, 4, 'Sobo'];
// console.log(arr1.concat(arr2));

// reverse -> reverse array items
// console.log(names.reverse());

//* Main Array Methods
let names = ['John', 'Robert', 'Bruce', 'Clark', 'Peter'];

//* 1) Unshift -> Adds element at start of the array
names.unshift('Susan');
console.log(names);

//* 2) Shift -> Removes element at start of the array
names.shift();
console.log(names);

//* 3) Push -> Adds elements at the end of array
names.push('Scooby Doo');
console.log(names);

//* 4) Pop -> Removes element at the end of array
names.pop();
names.pop();
names.pop();
console.log(names);
