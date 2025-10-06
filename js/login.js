// Users database
const users = [
  {
    name: "Resma C",
    regNo: "128156186",
    branch: "BTech CSE (AI & DS)",
    year: "2nd Year",
    semester: "3rd",
    email: "resma@sastra.edu",
    password: "password123",
    photo: "assets/profile/default.png"
  },
  {
    name: "Tejaswini K",
    regNo: "128003111",
    branch: "BTech CSE",
    year: "2nd Year",
    semester: "3rd",
    email: "tejaswini@sastra.edu",
    password: "password456",
    photo: "assets/profile/default.png"
  }
];

document.getElementById("loginBtn").addEventListener("click", () => {
  const regNo = document.getElementById("regNo").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.regNo === regNo && u.password === password);
  if(user){
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid register number or password");
  }
});
