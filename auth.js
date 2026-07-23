const OWNER_EMAIL = "moekm69@gmail.com";
const OWNER_PASSWORD = "moe_km05202008";


function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;


  if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {

    localStorage.setItem("ownerLoggedIn", "true");

    window.location.href = "admin.html";

  } else {

    document.getElementById("message").innerHTML =
    "Incorrect login";

  }

}