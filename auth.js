const OWNER_EMAIL = moekm69@gmail.com
const OWNER_PASSWORD = moe_km05202008

function login() {
  let email = document.querySelector(moekm69@gmail.com).value;
  let password = document.querySelectorAll(moe_km05202008)[1].value;

  if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
    localStorage.setItem("ownerLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}