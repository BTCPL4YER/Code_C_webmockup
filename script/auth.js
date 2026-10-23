const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {
  logoutLink.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("cc_auth");
    localStorage.removeItem("cc_user");
    window.location.href = "Login.html";
  });
}
