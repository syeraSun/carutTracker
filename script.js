// Initialize points for each member, loading from localStorage if available
let points = JSON.parse(localStorage.getItem("points")) || {
    Syera: 0,
    Ira: 0,
    Nabilah: 0,
    Syak: 0,
    Ain: 0,
    Ayunie: 0,
    // Add additional members here if needed
};

// Function to save points data to localStorage
function savePointsToLocalStorage() {
    localStorage.setItem("points", JSON.stringify(points));
}

// Function to add rant points
function addRantPoint() {
    const memberSelect = document.getElementById("memberSelect");
    const selectedMember = memberSelect.value;

    // Check if a member is selected
    if (!selectedMember) {
        alert("Please select a member.");
        return;
    }

    // Increase the member's points by RM0.10 and save to localStorage
    points[selectedMember] += 0.10;
    savePointsToLocalStorage();
    updateLeaderboard();
}

// Function to update the leaderboard display
function updateLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = ""; // Clear existing rows

    // Create a row for each member and their points
    for (const member in points) {
        const row = document.createElement("tr");
        const memberCell = document.createElement("td");
        const pointsCell = document.createElement("td");

        memberCell.textContent = member;
        pointsCell.textContent = `RM${points[member].toFixed(2)}`; // Format points to 2 decimal places

        row.appendChild(memberCell);
        row.appendChild(pointsCell);
        leaderboardBody.appendChild(row);
    }
}

// Load points data and initialize leaderboard on page load
updateLeaderboard();
