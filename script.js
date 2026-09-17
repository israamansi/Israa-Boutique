const whatsapp = "201021755186";

const bestSellers = [
  {
    id: "best1",
    name: "Best Seller",
    image: "1789657752151.jpg"
  },
  {
    id: "best2",
    name: "Best Seller",
    image: "1789656317695.jpg"
  },
  {
    id: "best3",
    name: "Best Seller",
    image: "1789663052943.jpg"
  },
  {
    id: "best4",
    name: "Best Seller",
    image: "1789664028182.jpg"
  }
];

const productGroups = [
  {
    id: "crystal",
    name: "Crystal Comfort Scarf",
    price: 150,
    colors: [
      { color: "Mint Green", image: "1789663443949.jpg" },
      { color: "Lavender", image: "1789663513275.jpg" },
      { color: "Café", image: "1789663143161.jpg" },
      { color: "Slate Gray", image: "slate-gray.jpg" }
    ]
  },

  {
    id: "chiffon1",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Sahara", image: "1789653340773.jpg" },
      { color: "Taupe", image: "1789653276516.jpg" },
      { color: "Light Beige", image: "1789666550479.jpg" },
      { color: "Beige", image: "1789666385502.jpg" }
    ]
  },

  {
    id: "chiffon2",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "White", image: "1789612810611.jpg" },
      { color: "Off White", image: "1789656243041.jpg" },
      { color: "Ice Grey", image: "1789656096412.jpg" },
      { color: "Cream", image: "cream.jpg" }
    ]
  },

  {
    id: "chiffon3",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Mint Green", image: "1789656901442.jpg" },
      { color: "Pistachio", image: "1789657273597.jpg" },
      { color: "Light Olive Green", image: "Light.olive.green.jpg" },
      { color: "Olive Green", image: "1789658305384.jpg" }
    ]
  },

  {
    id: "chiffon4",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Baby Blue", image: "1789661119267.jpg" },
      { color: "Dusty Blue", image: "1789653467598.jpg" },
      { color: "Ocean Blue", image: "1789653590293.jpg" },
      { color: "Petroleum", image: "1789609239720.jpg" },
      { color: "Navy", image: "1789661581244.jpg" },
      { color: "Midnight", image: "1789654089295.jpg" }
    ]
  },

  {
    id: "chiffon5",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Peach", image: "1789662261446.jpg" },
      { color: "Coral", image: "1789662069402.jpg" },
      { color: "Orange", image: "1789609303020.jpg" },
      { color: "Red", image: "1789609437413.jpg" },
      { color: "Caramel", image: "1789670850781.jpg" },
      { color: "Maroon", image: "1789661509678.jpg" }
    ]
  },

  {
    id: "chiffon6",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Dusty Rose", image: "1789659142918.jpg" },
      { color: "Baby Pink", image: "1789672026217.jpg" },
      { color: "Rosewood", image: "1789659236519 (1).jpg" },
      { color: "Pink", image: "1789659236519.jpg" }
    ]
  },

  {
    id: "chiffon7",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Dusty Grey", image: "1789655859702.jpg" },
      { color: "Grey", image: "1789655856246.jpg" }
    ]
  },

  {
    id: "chiffon8",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      { color: "Dark Mauve", image: "1789664028182.jpg" },
      { color: "Mulberry", image: "1789672320095.jpg" },
      { color: "Lavender", image: "1789612119826.jpg" },
      { color: "Ice Mauve", image: "1789658699638.jpg" },
      { color: "Aubergine", image: "Aubergine.jpg" }
    ]
  }
];

let cart = JSON.parse(localStorage.getItem("israaCart")) || [];

let currentGroup = null;
let currentIndex = 0;

function renderBestSellers() {
  const container = document.getElementById("productsContainer");

  if (!container) return;

  container.innerHTML = "";

  bestSellers.forEach(product => {
    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
    `;

    container.appendChild(card);
  });
}

function renderProductGroups() {
  let catalog = document.getElementById("productCatalog");

  if (!catalog) {
    catalog = document.createElement("section");

    catalog.id = "productCatalog";
    catalog.className = "section";

    const bestSection = document.getElementById("best-sellers");

    if (bestSection) {
      bestSection.after(catalog);
    }
  }

  catalog.innerHTML = "";

  const crystalTitle = document.createElement("h2");

  crystalTitle.className = "section-title";
  crystalTitle.textContent = "Crystal Comfort Scarf";

  catalog.appendChild(crystalTitle);

  createProductWindow(catalog, productGroups[0]);

  const chiffonTitle = document.createElement("h2");

  chiffonTitle.className = "section-title";
  chiffonTitle.textContent = "Crepe Chiffon Scarf";

  catalog.appendChild(chiffonTitle);

  productGroups.slice(1).forEach(group => {
    createProductWindow(catalog, group);
  });
}

function createProductWindow(catalog, group) {
  const groupSection = document.createElement("div");

  groupSection.className = "product-group";

  groupSection.innerHTML = `
    <div class="group-window">
      <div class="group-track"></div>
    </div>
  `;

  catalog.appendChild(groupSection);

  const track = groupSection.querySelector(".group-track");

  group.colors.forEach((product, index) => {
    const card = document.createElement("div");

    card.className = "catalog-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.color}">

      <div class="catalog-info">
        <span>${product.color}</span>
        <span>${group.price} EGP</span>

        <button onclick="openProduct('${group.id}', ${index})">
          View
        </button>
      </div>
    `;

    track.appendChild(card);
  });
}

function openProduct(groupId, index) {
  const group = productGroups.find(item => item.id === groupId);

  if (!group) return;

  currentGroup = group;
  currentIndex = index;

  updateProductModal();

  document.getElementById("productOverlay").classList.add("active");
}

function updateProductModal() {
  if (!currentGroup) return;

  const product = currentGroup.colors[currentIndex];

  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.color;

  document.getElementById("modalName").textContent = currentGroup.name;
  document.getElementById("modalColor").textContent = product.color;
  document.getElementById("modalPrice").textContent = currentGroup.price;
}

function nextProduct() {
  if (!currentGroup) return;

  currentIndex++;

  if (currentIndex >= currentGroup.colors.length) {
    currentIndex = 0;
  }

  updateProductModal();
}

function previousProduct() {
  if (!currentGroup) return;

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentGroup.colors.length - 1;
  }

  updateProductModal();
}

function closeProduct() {
  document.getElementById("productOverlay").classList.remove("active");
}

let touchStartX = 0;

document.addEventListener("touchstart", event => {
  if (!event.touches.length) return;

  touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", event => {
  if (!touchStartX) return;

  const overlay = document.getElementById("productOverlay");

  if (!overlay.classList.contains("active")) {
    touchStartX = 0;
    return;
  }

  const touchEndX = event.changedTouches[0].clientX;

  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) > 50) {
    if (difference > 0) {
      nextProduct();
    } else {
      previousProduct();
    }
  }

  touchStartX = 0;
});

function saveCart() {
  localStorage.setItem("israaCart", JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById("cartCount");

  if (!count) return;

  count.textContent = cart.length;
}

function addCurrentProduct() {
  if (!currentGroup) return;

  const product = currentGroup.colors[currentIndex];

  cart.push({
    name: currentGroup.name,
    color: product.color,
    price: currentGroup.price,
    image: product.image
  });

  saveCart();

  alert("Added to cart");

  closeProduct();
}

function openCart() {
  renderCart();

  document.getElementById("cartOverlay").classList.add("active");
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("active");
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  if (!container || !total) return;

  container.innerHTML = "";

  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price;

    const row = document.createElement("div");

    row.className = "cart-item";

    row.innerHTML = `
      <img src="${item.image}" alt="${item.color}">

      <div>
        <strong>${item.name}</strong>
        <p>${item.color}</p>
        <p>${item.price} EGP</p>

        <button onclick="removeFromCart(${index})">
          Remove
        </button>
      </div>
    `;

    container.appendChild(row);
  });

  total.textContent = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);

  saveCart();

  renderCart();
}

function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  closeCart();

  document.getElementById("checkoutOverlay").classList.add("active");
}

function closeCheckout() {
  document.getElementById("checkoutOverlay").classList.remove("active");
}

function placeOrder(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const governorate = document.getElementById("governorate").value;
  const address = document.getElementById("customerAddress").value;

  let message = "New Order - Israa Boutique\n\n";

  message += "Name: " + name + "\n";
  message += "Phone: " + phone + "\n";
  message += "Governorate: " + governorate + "\n";
  message += "Address: " + address + "\n\n";

  message += "Products:\n";

  let total = 0;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.color} - ${item.price} EGP\n`;

    total += item.price;
  });

  message += "\nTotal: " + total + " EGP";
  message += "\nPayment Method: Vodafone Cash";
  message += "\nVodafone Cash Number: 01021755186";

  const url =
    "https://wa.me/" +
    whatsapp +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");

  cart = [];

  saveCart();

  closeCheckout();
}

document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  renderProductGroups();
  updateCartCount();
});
