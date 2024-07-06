//enum for productStatus
enum ProductStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

//use Array with any
let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "SmartPhone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

//display function with arrow function
//tell where data come from
function displayProductDetails(products: any[]) {
  products.forEach((product) => {
    console.log(
      `Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`
    ); //use back-trick ``
  });
}

displayProductDetails(products);
