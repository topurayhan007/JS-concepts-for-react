const numbers = [89, 35, 98, 12];
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["King Khan", "Dhakar Mastan"],
};

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFityFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNubers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNubers);
