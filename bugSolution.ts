function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user.join(" "))); // Solution 1: Join the array elements into a single string

// Solution 2: Modify the function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

console.log(greeterArray(user)); 