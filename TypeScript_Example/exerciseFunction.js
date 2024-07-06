var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//create filter function
function filterProductByPrice(products, filter) {
    return products.filter(function (products) { return products.price > filter; });
}
var filterProduct = filterProductByPrice(products, 2000);
var discount = discountProduct(filterProduct);
//discount
function discountProduct(products) {
    // ... copy data from array
    return products.map(function (products) { return (__assign(__assign({}, products), { price: products.price * 0.9 })); }); // change price in array by 10%
}
console.log(discount);
