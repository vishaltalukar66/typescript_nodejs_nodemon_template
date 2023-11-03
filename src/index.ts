import dummy_run from "./dummy";


let message: string = "Hello, TypeScript!";

// Define a function that takes two numbers and returns their sum
function add(a: number, b: number): number {
    return a + b;
}

// Call the function and store the result
let sum: number = add(5, 3);

// Log the message and the result of the addition
console.log(message);
console.log(`5 + 3 = ${sum}`);
//function call 
dummy_run();
