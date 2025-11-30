const numParticipants = parseInt(prompt("Enter the number of participants:"), 10);

let participants = [];

for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

const ol = document.getElementById("participantsList");

for (let i = 0; i < participants.length; i++) {
    const li = document.createElement("li");
    li.textContent = participants[i];
    ol.appendChild(li);
}
