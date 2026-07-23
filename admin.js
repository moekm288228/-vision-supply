let products = JSON.parse(localStorage.getItem("products")) || [];


function addProduct(){

let name = document.getElementById("productName").value;
let price = document.getElementById("productPrice").value;
let image = document.getElementById("productImage").value;
let status = document.getElementById("status").value;


products.push({
name:name,
price:price,
image:image,
status:status
});


localStorage.setItem("products", JSON.stringify(products));


alert("Product Added!");

displayProducts();

}



function displayProducts(){

let area = document.getElementById("products");

area.innerHTML = "";


products.forEach(product => {

area.innerHTML += `

<div class="product">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<p>${product.status}</p>

</div>

`;

});

}


displayProducts();