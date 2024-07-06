type Product = {
  name: string;
  price: number;
  category: string;
};

let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

//create filter function
function filterProductByPrice(products: Product[], filter: number): Product[] {
  return products.filter((products) => products.price > filter);
}

let filterProduct = filterProductByPrice(products, 2000);
let discount = discountProduct(filterProduct);

//discount
function discountProduct(products: Product[]): Product[] {
    // ... copy data from array
    return products.map(products => ({...products, price: products.price * 0.9}));// change price in array by 10%
}

console.log(discount);
