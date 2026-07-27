import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ADD PRODUCT

async function addProduct() {

const product = {

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

};


try {

await addDoc(collection(db,"products"), product);

alert("Product Added 🔥");

showProducts();


} catch(error){

console.log(error);
alert("Error adding product");

}

}


window.addProduct = addProduct;



// SAVE BRAND SETTINGS

async function saveSettings(){

const settings = {

logo: document.getElementById("logo").value,

instagram: document.getElementById("instagram").value,

tiktok: document.getElementById("tiktok").value

};


await setDoc(doc(db,"settings","brand"), settings);


alert("Brand Settings Saved 🔥");

}


window.saveSettings = saveSettings;



// SHOW PRODUCTS

async function showProducts(){

const area = document.getElementById("products");

if(!area) return;


area.innerHTML="";


const snapshot = await getDocs(collection(db,"products"));


snapshot.forEach((docItem)=>{


const product = docItem.data();


area.innerHTML += `

<div class="card">

<img src="${product.image}" class="product-image">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p>$${product.price}</p>

<p>Size: ${product.size}</p>

<p>${product.description}</p>

<p>Status: ${product.status}</p>


<button onclick="deleteProduct('${docItem.id}')">
Delete
</button>


</div>

`;


});


}



window.deleteProduct = async function(id){

await deleteDoc(doc(db,"products",id));

showProducts();

};



// LOGOUT

function logout(){

localStorage.removeItem("ownerLoggedIn");

window.location.href="login.html";

}


window.logout = logout;


showProducts();
