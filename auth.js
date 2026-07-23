const OWNER_EMAIL = "your-email@example.com";
const OWNER_PASSWORD = "your-password";

function login() {
  let email = document.querySelector("input").value;
  let password = document.querySelectorAll("input")[1].value;

  if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
    localStorage.setItem("ownerLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}