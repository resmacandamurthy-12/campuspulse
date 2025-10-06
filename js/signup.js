// Retrieve users database from localStorage or create empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("signupBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const photo = "assets/profile/default.png"; // Default profile image

  if(!name || !regNo || !branch || !year || !semester || !email || !password){
    alert("Please fill all fields");
    return;
  }

  // Check if register number already exists
  const exists = users.find(u => u.regNo === regNo);
  if(exists){
    alert("Register number already registered. Please login.");
    return;
  }

  // Add new user
  const newUser = { name, regNo, branch, year, semester, email, password, photo };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful! You can now login.");
  window.location.href = "index.html";
});
