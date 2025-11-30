let numbers = [];
let input;

// Ask the user for numbers until 0 is entered
do {
    input = parseFloat(prompt("Enter a number (0 to stop):"));
    if (input !== 0) {
        numbers.push(input);
    }
} while (input !== 0);

// Sort numbers from largest to smallest
numbers.sort((a, b) => b - a);

// Print numbers in descending order to the console
console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
