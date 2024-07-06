//Create array of Person object
var people = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Jim Beam", age: 35 },
];
function Filter(persons) {
    return persons.filter(function (persons) { return persons.age >= 30; });
}
//Using Function
var adults = Filter(people);
console.log(adults);
