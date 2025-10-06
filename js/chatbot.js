const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const userMsg = chatInput.value;
  if(!userMsg) return;

  // Display user message
  chatWindow.innerHTML += `<div class="user-msg">${userMsg}</div>`;

  // Simple bot response (replace with OpenAI API for real AI)
  let botMsg = "I am learning to help you!";
  if(userMsg.toLowerCase().includes("hello")) botMsg = `Hello ${JSON.parse(localStorage.getItem("currentUser")).name}! How can I help you today?`;

  chatWindow.innerHTML += `<div class="bot-msg">${botMsg}</div>`;
  chatInput.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
});
