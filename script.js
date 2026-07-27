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

<img src="${product.image}" class="product-image">

<h3>${product.name}</h3>

<h4>${product.brand}</h4>

<p class="price">$${product.price}</p>

<p><b>Size:</b> ${product.size}</p>

<p>${product.description}</p>

<p><b>Fragrance Notes:</b><br>
${product.notes}
</p>

<p>
${product.newDrop === "Yes" ? "🔥 NEW DROP" : ""}
${product.bestSeller === "Yes" ? "⭐ BEST SELLER" : ""}
</p>

<p class="status">
${product.status === "Available" ? "✅ Available" : "❌ Sold Out"}
</p>

<a href="https://instagram.com/visionsupply.shop">
<button>Order Now</button>
</a>

</div>

`;

});

}


showProducts();