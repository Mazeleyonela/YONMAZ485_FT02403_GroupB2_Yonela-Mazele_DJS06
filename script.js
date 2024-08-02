const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// I want to log each name and each province to the console, using the forEach
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Use map to create a new array of province names in all uppercase. Log the new array to the console.
const provincesInUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesInUppercase);

//Create a new array using map that contains the length of each name.
lengthOfEachName = names.map (name => name.length);
console.log(lengthOfEachName);
