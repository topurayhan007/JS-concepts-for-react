// 1. How to declare a variable using let and const
const fatherName = "Arnold";
let session = "rainy";
season = "winter";

// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: &&, ||
if (fatherName === "arnold" || season === "rainy") {
} else if (fatherName === "Arnold") {
} else {
}

// 3. Array declare
// index,
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
}

// 5. function
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(35, 78));

// 6. Object
// 3 ways to access property by name
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["King Khan", "Dhakar Mastan"],
};

const myVar = "age";
console.log(student.age); // direct by property
console.log(student["age"]); // access via property name string
console.log(student[myVar]); // access via property name in a variable
