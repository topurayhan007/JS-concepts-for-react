const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iPhone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yello" },
  { name: "sunglass", price: 300, brand: "rayBan", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// 1. Map
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// 2. forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

products.forEach((products) => {
  //do multiline code
});

// 3. filter (returns array that matches condition)
const cheap = products.filter(product <= 5000);
console.log(cheap);

const SpecificName = products.filter((product) => product.name.includes("n"));
console.log(SpecificName);

// 4. Find (returns the first element that matches the condition)
const special = products.find((product) => product.name.includes("n"));
console.log(special);
