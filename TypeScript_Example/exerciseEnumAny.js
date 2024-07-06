//enum for productStatus
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
//use Array with any
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "SmartPhone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
//display function with arrow function
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status: ").concat(product.status, ", Price: ").concat(product.price));
    });
}
displayProductDetails(products);
