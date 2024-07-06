interface Person {
  name: string;
  age: number;
}

//Create array of Person object
const people: Person[] = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Jim Beam", age: 35 },
];

function Filter(persons: Person[]): Person[] {
  return persons.filter((persons) => persons.age >= 30);
}

//Using Function
const adults = Filter(people);
console.log(adults);