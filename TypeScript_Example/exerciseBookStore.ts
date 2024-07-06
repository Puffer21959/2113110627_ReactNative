interface Book {
  title: string;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const books: Book[] = [
  { title: "The Great Gatsby", genre: "fiction", price: 320 },
  { title: "War and Peace", genre: "fiction", price: 250 },
  { title: "Economics 101", genre: "educational", price: 480 },
  { title: "In Cold Blood", genre: "non-fiction", price: 300 },
  { title: "The Catcher In The Rye", genre: "fiction", price: 400 },
];

//create filter function
function filterProductByPrice(products: Book[]): Book[] {
  return products.filter(
    (products) => products.genre == "fiction" && products.price > 300
  );
}

let filterProduct = filterProductByPrice(books);
let discount = discountProduct(filterProduct);

//discount
function discountProduct(products: Book[]): Book[] {
    // ... copy data from array
    return products.map(products => ({...products, price: products.price * 0.9}));// change price in array by 10%
}

console.log(discount);