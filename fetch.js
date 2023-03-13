// 1. JSON

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((number) => console.log(number));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove for an array
const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iPhone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yello" },
  { name: "sunglass", price: 300, brand: "rayBan", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "webcame", price: 700, brand: "Lal" };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter((p) => p.name !== "phone");
