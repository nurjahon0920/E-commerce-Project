document.addEventListener("DOMContentLoaded", () => {
  displayProductDetails();
});

function displayProductDetails() {
  const product = JSON.parse(localStorage.getItem("productDetails"));

  if (product) {
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").innerText = `${product.price} ₽`;
  }
}

function addToCartFromDetails() {
  const product = JSON.parse(localStorage.getItem("productDetails"));
  if (product) {
    const cartItem = cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
}
//

//

//

//

//

//

document.addEventListener("DOMContentLoaded", () => {
  displayProductDetails();
});

function displayProductDetails() {
  const product = JSON.parse(localStorage.getItem("productDetails"));

  if (product) {
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").innerText = `${product.price} ₽`;
  }
}

function addToCartFromDetails() {
  const product = JSON.parse(localStorage.getItem("productDetails"));
  if (product) {
    const cartItem = cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
}
