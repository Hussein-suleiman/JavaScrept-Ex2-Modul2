const dogNames = [];

// Ask the user for six dog names
for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
}

// Sort names in reverse alphabetical order
dogNames.sort().reverse();

// Get the <ul> element from HTML
const ul = document.getElementById("dogList");

// Add each dog name as a list item
for (let i = 0; i < dogNames.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogNames[i];
    ul.appendChild(li);
}
