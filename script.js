let products = JSON.parse(localStorage.getItem("products")) || [];


function showProducts(){

let area = document.getElementById("products");

if(!area) return;

area.innerHTML = "";


products.forEach(product => {

area.innerHTML += `

<div class="card">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<p>${product.status}</p>

</div>

`;

});

}


showProducts();