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

//Use sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

//Create a boolean array using map and some to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

//Use reduce to transform the names array into an object mapping names to their respective provinces
const namesToProvinces = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});
  console.log(namesToProvinces);

//Iterate over the products array, logging each product name.
console.log(products.map(product => product.product));

console.log(products.filter(product => product.product.length <= 5));

console.log(products
    .filter(product => product.price.trim() !== '')
    .map(product => parseFloat(product.price))
    .reduce((total, price) => total + price, 0)
  );
  
  console.log(products.reduce((str, product) => str + product.product, ''));
  
// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
  const prices = products
  .filter(product => product.price.trim() !== '')
  .map(product => parseFloat(product.price));

const highest = Math.max(...prices);
const lowest = Math.min(...prices);

console.log(`Highest: ${highest}. Lowest: ${lowest}.`);

console.log(products.reduce((newObj, product) => {
    newObj.push({ name: product.product, cost: product.price });
    return newObj;
  }, []));
  
