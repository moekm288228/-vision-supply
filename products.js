let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;

  products.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added!");
}