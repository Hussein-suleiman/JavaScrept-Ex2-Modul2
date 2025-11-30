let numbers = [];
let input;

while (true) {
    input = parseFloat(prompt("Enter a number:"));

    if (numbers.includes(input)) {
        alert(`The number ${input} has already been given.`);
        break;
    }

    numbers.push(input);
}

numbers.sort((a, b) => a - b);

console.log("Numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
