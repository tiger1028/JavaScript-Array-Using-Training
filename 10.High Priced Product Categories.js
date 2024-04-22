/* You are given an array of objects representing a collection of products, each with a name, price, and category. 
Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then 
return an array of objects containing only the categories that have an average price above 50.

 Example 1: 
   Input:  products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];


   Output:  [ 
  { category: 'Clothes', average: 55 },
  { category: 'Electronics', average: 55 }
]
 Example 2: 
   Input:  products = [
  { name: "Product 1", price: 50, category: "Furnitures" },
  { name: "Product 2", price: 60, category: "Weapons" },
  { name: "Product 3", price: 30, category: "Furnitures" },
  { name: "Product 4", price: 50, category: "Weapons" },
  { name: "Product 5", price: 40, category: "Weapons" },
  { name: "Product 6", price: 80, category: "Furnitures" },
  { name: "Product 7", price: 70, category: "Weapons" },
  { name: "Product 8", price: 30, category: "Furnitures" },
];


   Output:  [ { category: 'Weapons', average: 55 } ]

 Example 3: 
   Input:  products = [
  { name: "Product 1", price: 80, category: "Computers" },
  { name: "Product 2", price: 20, category: "Tables" },
  { name: "Product 3", price: 50, category: "Computers" },
  { name: "Product 4", price: 60, category: "Tables" },
  { name: "Product 5", price: 20, category: "Tables" },
  { name: "Product 6", price: 50, category: "Computers" },
  { name: "Product 7", price: 30, category: "Tables" },
  { name: "Product 8", price: 60, category: "Computers" },
];


   Output:  [ { category: 'Computers', average: 60 } ]
 Example 4: 
   Input:  products = [
  { name: "Product 1", price: 40, category: "Medicine" },
  { name: "Product 2", price: 50, category: "Food" },
  { name: "Product 3", price: 30, category: "Medicine" },
  { name: "Product 4", price: 60, category: "Food" },
  { name: "Product 5", price: 25, category: "Food" },
  { name: "Product 6", price: 55, category: "Medicine" },
  { name: "Product 7", price: 45, category: "Food" },
  { name: "Product 8", price: 60, category: "Medicine" },
];


   Output:  [ ]

*/

const getHighPricedProductFuction = (products) => {
  const categoryPriceArray = [];
  const categories = [];
  products.map(product => {
    if (categories.indexOf(product.category) == -1)
      categories.push(product.category);
  })

  categories.map(category => {
    let categoryWithAveragePrice = {category: "", average: 0};
    const filteredArray = products.filter(product => product.category == category);
    const average = filteredArray.reduce((sum, product) => {
      return sum + product.price;
    }, 0) / filteredArray.length;

    categoryWithAveragePrice.category = category;
    categoryWithAveragePrice.average = average;
    categoryPriceArray.push(categoryWithAveragePrice);
  })
  return categoryPriceArray.filter(category =>  category.average > 50 )
}

const products = [
  { name: "Product 1", price: 40, category: "Medicine" },
  { name: "Product 2", price: 50, category: "Food" },
  { name: "Product 3", price: 30, category: "Medicine" },
  { name: "Product 4", price: 60, category: "Food" },
  { name: "Product 5", price: 25, category: "Food" },
  { name: "Product 6", price: 55, category: "Medicine" },
  { name: "Product 7", price: 45, category: "Food" },
  { name: "Product 8", price: 60, category: "Medicine" },
];
const result = getHighPricedProductFuction(products);
console.log(result);