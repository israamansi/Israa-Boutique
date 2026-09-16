const whatsapp = "201021755186";

const products = [
  {
    id: 1,
    name: "Classic Hijab",
    color: "Beige",
    price: 250,
    image: "images/hijab1.jpg"
  },
  {
    id: 2,
    name: "Silky Hijab",
    color: "Brown",
    price: 300,
    image: "images/hijab2.jpg"
  },
  {
    id: 3,
    name: "Elegant Hijab",
    color: "Mocha",
    price: 275,
    image: "images/hijab3.jpg"
  },
  {
    id: 4,
    name: "Soft Hijab",
    color: "Cream",
    price: 225,
    image: "images/hijab4.jpg"
  }
];

let cart = [];
let selectedProduct = null;

try {
  cart = JSON.parse(localStorage.getItem("israaCart")) || [];
} catch (e) {
  cart = [];
}

function saveCart() {
  localStorage.setItem("israaCart", JSON.stringify(cart));
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function displayProducts() {
  const container = document.getElementById("productsContainer");

  container.innerHTML = "";

  products.forEach(function(product) {
    container.innerHTML += `
      <div class="product-card">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
        >

        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-color">${product.color}</div>
          <div class="product-price">${product.price} EGP</div>

          <button
            class="product-button"
            onclick="openProduct(${product.id})"
          >
            View Product
          </button>
        </div>
      </div>
    `;
  });
}

function openProduct(id) {
  selectedProduct = products.find(function(product) {
    return product.id === id;
  });

  if (!selectedProduct) return;

  document.getElementById("modalImage").src =
    selectedProduct.image;

  document.getElementById("modalName").textContent =
    selectedProduct.name;

  document.getElementById("modalColor").textContent =
    selectedProduct.color;

  document.getElementById("modalPrice").textContent =
    selectedProduct.price;

  document
    .getElementById("productOverlay")
    .classList.add("active");
}

function closeProduct() {
  document
    .getElementById("productOverlay")
    .classList.remove("active");
}

function addCurrentProduct() {
  if (!selectedProduct) return;

  cart.push(selectedProduct);

  saveCart();
  updateCartCount();
  closeProduct();
}

function openCart() {
  renderCart();

  document
    .getElementById("cartOverlay")
    .classList.add("active");
}

function closeCart() {
  document
    .getElementById("cartOverlay")
    .classList.remove("active");
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const totalElement = document.getElementById("cartTotal");

  if (cart.length === 0) {
    container.innerHTML =
      '<div class="empty">Your cart is empty.</div>';

    totalElement.textContent = "0";
    return;
  }

  container.innerHTML = "";

  let total = 0;

  cart.forEach(function(product, index) {
    total += product.price;

    container.innerHTML += `
      <div class="cart-item">

        <div class="cart-item-info">
          <strong>${product.name}</strong>
          <div>${product.color}</div>
          <div>${product.price} EGP</div>
        </div>

        <button
          class="remove-button"
          onclick="removeFromCart(${index})"
        >
          Remove
        </button>

      </div>
    `;
  });

  totalElement.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);

  saveCart();
  updateCartCount();
  renderCart();
}

function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  closeCart();

  document
    .getElementById("checkoutOverlay")
    .classList.add("active");
}

function closeCheckout() {
  document
    .getElementById("checkoutOverlay")
    .classList.remove("active");
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) return;

  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const governorate =
    document.getElementById("governorate").value;

  const address =
    document.getElementById("customerAddress").value.trim();

  let total = 0;
  let items = "";

  cart.forEach(function(product) {
    total += product.price;

    items +=
      product.name +
      " | " +
      product.color +
      " | " +
      product.price +
      " EGP\n";
  });

  const message =
    "Israa Boutique - New Order\n\n" +
    "Name: " + name + "\n" +
   
