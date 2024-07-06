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
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher In The Rye", genre: "fiction", price: 400 },
];
//create filter function
function filterProductByPrice(products) {
    return products.filter(function (products) { return products.genre == "fiction" && products.price > 300; });
}
var filterProduct = filterProductByPrice(books);
var discount = discountProduct(filterProduct);
//discount
function discountProduct(products) {
    // ... copy data from array
    return products.map(function (products) { return (__assign(__assign({}, products), { price: products.price * 0.9 })); }); // change price in array by 10%
}
console.log(discount);
