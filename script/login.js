const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

const allowedUsers = [
  { user: "admin", pass: "chronicles" },
  { user: "guest", pass: "welcome" }
];

function showMessage(text, isError = false) {
  message.textContent = text;
  message.style.color = isError ? "#ffb347" : "#3fd0c9";
}

if (localStorage.getItem("cc_auth") === "1") {
  const savedUser = localStorage.getItem("cc_user") || "";
  showMessage(savedUser ? `Welcome back, ${savedUser}.` : "Welcome back.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.querySelector("input[name='username']").value.trim();
  const password = form.querySelector("input[name='pwd']").value;

  const isValid = allowedUsers.some(
    (entry) => entry.user === username && entry.pass === password
  );

  if (!isValid) {
    showMessage("Invalid username or password. Try again.", true);
    return;
  }

  localStorage.setItem("cc_auth", "1");
  localStorage.setItem("cc_user", username);
  showMessage("Success. Redirecting...");
  window.location.href = "index.html";
});
