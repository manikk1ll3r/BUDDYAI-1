const PASSWORD = "buddy123";
let currentBot = "";
const chatHistory = document.getElementById("chatHistory");

function login() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  } else {
    document.getElementById("loginError").innerText = "Wrong password!";
  }
}

function setBot(botName) {
  currentBot = botName;
  document.getElementById("botName").innerText = `Talking to: ${botName}`;
  addBotMessage(`Hi! I'm ${botName}. How can I help you today?`);
}

function selectEmotion(emotion) {
  let response = "";
  if (emotion === "happy") response = "That's wonderful! Tell me more.";
  if (emotion === "sad") response = "I'm here for you. Want to talk about it?";
  if (emotion === "anxious") response = "Take a deep breath — I'm here with you.";
  addBotMessage(response);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message) {
    addUserMessage(message);
    addBotMessage(`I hear you: "${message}". Want to say more?`);
    input.value = "";
  }
}

function addUserMessage(msg) {
  chatHistory.innerHTML += `<div class="message"><strong>You:</strong> ${msg}</div>`;
}

function addBotMessage(msg) {
  chatHistory.innerHTML += `<div class="message"><strong>${currentBot}:</strong> ${msg}</div>`;
}

function saveDiary() {
  const diary = document.getElementById("diaryEntry").value.trim();
  if (diary) {
    localStorage.setItem("buddy_diary", diary);
    document.getElementById("saveMsg").innerText = "Diary saved!";
  }
}
