const OWNER_EMAIL = 
const OWNER_PASSWORD = 

function login() {
  let email = document.querySelector(moekm69@gmail.com).value;
  let password = document.querySelectorAll(moe_km05202008)[1].value;

  if (email === moekm69@gmail.com && password === moe_km05202008) {
    localStorage.setItem("ownerLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}