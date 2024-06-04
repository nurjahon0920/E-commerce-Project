const indicators = document.querySelector(".images");
const showImg = document.querySelector("#show img");
indicators.addEventListener("click", (e) => {
  let imgUrl = e.target.src;
  imgUrl && (showImg.src = imgUrl);
});

//

//

//

//

//

//

//

//

//
function displayProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = products
    .map(
      (product) => `
        <a href="product-details.html" class="card" data-id="${product.id}" onclick="saveProductDetails(${product.id})">
          <img src="${product.image}" alt="card">
          <div class="sec1-card-top">
            <div class="sec1-card-top-left">
              <h3>${product.price} ₽</h3>
            </div>
          </div>
          <h4 class="sec1-card-h4">${product.name}</h4>
          <img src="../assets/images/home-page/2talik-yulduz.svg" alt="">
        </a>
      `
    )
    .join("");
}

function saveProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  localStorage.setItem("productDetails", JSON.stringify(product));
}

//

//

//

//

//

//

//

//

//

const products = [
  {
    id: 1,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 77.99,
    image: "../assets/images/home-page/sec3_img1.png",
  },
  {
    id: 2,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 44.5,
    image: "../assets/images/home-page/sec2_img3.png",
  },
  {
    id: 3,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 44.5,
    image: "../assets/images/home-page/sec2_img1.png",
  },
  {
    id: 4,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 44.5,
    image: "../assets/images/home-page/sec2_img4.png",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});

function saveProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  localStorage.setItem("productDetails", JSON.stringify(product));
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.product.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function displayCart() {
  const cartContainer = document.getElementById("cart");
  if (!cartContainer) return;
  cartContainer.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
            <h3>${item.product.name}</h3>
            <p>Price: ${item.product.price} ₽</p>
            <p>Quantity: 
                <button onclick="updateQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
    `
    )
    .join("");
}

function updateQuantity(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function searchProducts() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}
