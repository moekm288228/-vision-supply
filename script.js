import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


async function showProducts(){

let area = document.getElementById("products");

if(!area) return;

area.innerHTML = "";

const snapshot = await getDocs(collection(db, "products"));


snapshot.forEach((doc)=>{

let product = doc.data();

area.innerHTML += `

<div class="card">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p>$${product.price}</p>

<p>Size: ${product.size}</p>

<p>${product.description}</p>

<p>Notes: ${product.notes}</p>

<p>${product.newDrop === "Yes" ? "🔥 NEW DROP" : ""}</p>

<p>${product.bestSeller === "Yes" ? "⭐ BEST SELLER" : ""}</p>

<p>Status: ${product.status}</p>

</div>

`;

});

}


showProducts();