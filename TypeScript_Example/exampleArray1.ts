//Array number
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers[2]); //30

//loop with Array
let names: string[] = ["Alice", "Bob", "Charlie"];
for(let name of names) {
   console.log(name) //Foreach 
}

//push and pop
let Fruits: string[] = ["Apple", "Banana"];
Fruits.push("Cherry");
console.log(Fruits);
Fruits.pop();
console.log(Fruits);
