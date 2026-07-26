import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
function addProduct(){

let product = {

name: document.getElementById("name").value,
brand: document.getElementById("brand").value,
price: document.getElementById("price").value,
size: document.getElementById("size").value,
category: document.getElementById("category").value,
description: document.getElementById("description").value,
notes: document.getElementById("notes").value,
image: document.getElementById("image").value,
quantity: document.getElementById("quantity").value,
status: document.getElementById("status").value,
newDrop: document.getElementById("newDrop").value,
bestSeller: document.getElementById("bestSeller").value
addDoc(collection(db, "products"), product)
.then(() => {
  alert("Product Added!");
})
.catch((error) => {
  console.log(error);
});
};


products.push(product);


localStorage.setItem("products", JSON.stringify(products));


alert("Product Added!");

showProducts();

}



function showProducts(){

let area = document.getElementById("products");

area.innerHTML = "";


products.forEach((product,index)=>{

area.innerHTML += `

<div class="card">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p>$${product.price}</p>

<p>${product.size}</p>

<p>${product.status}</p>

<p>${product.description}</p>

<button onclick="editProduct(${index})">
Edit
</button>

<button onclick="deleteProduct(${index})">
Delete
</button>

</div>

`;

});

}



function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products", JSON.stringify(products));

showProducts();

}


function logout(){

localStorage.removeItem("ownerLoggedIn");

window.location.href="login.html";

}


showProducts();

