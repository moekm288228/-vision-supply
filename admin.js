let products = JSON.parse(localStorage.getItem("products")) || [];


function addProduct(){

let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let image = document.getElementById("image").value;
let status = document.getElementById("status").value;


products.push({
name:name,
price:price,
image:image,
status:status
});


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

<p>$${product.price}</p>

<p>${product.status}</p>

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


showProducts();