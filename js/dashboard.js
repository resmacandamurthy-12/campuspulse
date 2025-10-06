// Get current logged-in user or fallback to preview user
let user = JSON.parse(localStorage.getItem("currentUser"));
if(!user){
  // Preview dummy user
  user = {
    name: "Resma C",
    regNo: "128156186",
    branch: "BTech CSE (AI & DS)",
    year: "2nd Year",
    semester: "3rd",
    email: "resma@sastra.edu",
    photo: "assets/profile/default.png"
  };
}

// Set profile image
document.getElementById("profileCircle").querySelector("img").src = user.photo;

// Greeting in console (or can add dynamic header)
console.log(`Hello, ${user.name}!`);

// Attendance percentage (example dynamic)
const attendancePercent = 85; // fixed preview
document.getElementById("attendancePercentage").innerText = `${attendancePercent}%`;
document.getElementById("attendanceDonut").style.transform = `(${attendancePercent*3.6}deg)`;

// Study Materials based on year & branch
const studyMaterialsList = document.getElementById("studyMaterialsList");
if(user.year === "2nd Year" && user.branch.includes("CSE")){
  studyMaterialsList.innerHTML = `
    <li><a href="https://drive.google.com/drive/folders/1JWzazYiV3ry7IeadbJs5xCnrlOIHetB1?usp=drive_link" target="_blank">2nd Year 3rd Sem Notes</a></li>
  `;
} else {
  studyMaterialsList.innerHTML = "<li>No materials available</li>";
}

// Open Campus Map
document.getElementById("openMapBtn").addEventListener("click", () => {
  window.open("https://maps.app.goo.gl/8nWUikTf9xZoBmav6", "_blank");
});


// Dark / Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode"); // adds/removes light-mode class

  // Update toggle icon based on current mode
  if(document.body.classList.contains("light-mode")){
    modeToggle.innerText = "🌙"; // currently light, clicking will switch to dark
  } else {
    modeToggle.innerText = "☀️"; // currently dark, clicking will switch to light
  }
});


// Chatbot Button Click
document.getElementById("chatbotBtn").addEventListener("click", () => {
  window.location.href = "chatbot.html"; // Opens chatbot page
});
