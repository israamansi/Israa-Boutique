const whatsapp = "201021755186";

const shippingRates = {
  Alexandria: 50,
  Delta: 80,
  Cairo: 80,
  Upper: 100,
  RedSea: 120
};

let cart = JSON.parse(localStorage.getItem("israaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("israaWishlist")) || [];

let currentProduct = null;
let currentGroup = null;
let currentIndex = 0;

/* =========================
   PRODUCTS
========================= */

const productGroups = [

  {
    id: "crystal",
    name: "Crystal Comfort Scarf",
    price: 150,
    products: [
      {
        color: "Mint Green",
        image: "1789663443949.jpg"
      },
      {
        color: "Lavender",
        image: "1789663513275.jpg"
      },
      {
        color: "Café",
        image: "1789663143161.jpg"
      },
      {
        color: "Slate Gray",
        image: "slate-gray.jpg"
      }
    ]
  },

  {
    id: "chiffon1",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Taupe",
        image: "1789653276516.jpg"
      },
      {
        color: "Light Beige",
        image: "1789666550479.jpg"
      },
      {
        color: "Beige",
        image: "1789666385502.jpg"
      }
    ]
  },

  {
    id: "chiffon2",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "White",
        image: "1789612810611.jpg"
      },
      {
        color: "Off White",
        image: "1789656243041.jpg"
      },
      {
        color: "Ice Grey",
        image: "1789656096412.jpg"
      },
      {
        color: "Cream",
        image: "cream.jpg"
      }
    ]
  },

  {
    id: "chiffon3",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Mint Green",
        image: "1789656901442.jpg"
      },
      {
        color: "Pistachio",
        image: "1789657273597.jpg"
      },
      {
        color: "Light Olive Green",
        image: "Light.olive.green.jpg"
      },
      {
        color: "Olive Green",
        image: "1789658305384.jpg"
      }
    ]
  },

  {
    id: "chiffon4",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Baby Blue",
        image: "1789661119267.jpg"
      },
      {
        color: "Dusty Blue",
        image: "1789653467598.jpg"
      },
      {
        color: "Ocean Blue",
        image: "1789653590293.jpg"
      },
      {
        color: "Petroleum",
        image: "1789609239720.jpg"
      },
      {
        color: "Navy",
        image: "1789661581244.jpg"
      },
      {
        color: "Midnight",
        image: "1789654089295.jpg"
      }
    ]
  },

  {
    id: "chiffon5",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Peach",
        image: "1789662261446.jpg"
      },
      {
        color: "Coral",
        image: "1789662069402.jpg"
      },
      {
        color: "Orange",
        image: "1789609303020.jpg"
      },
      {
        color: "Red",
        image: "1789609437413.jpg"
      },
      {
        color: "Caramel",
        image: "1789670850781.jpg"
      },
      {
        color: "Maroon",
        image: "1789661509678.jpg"
      }
    ]
  },

  {
    id: "chiffon6",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Dusty Rose",
        image: "1789659142918.jpg"
      },
      {
        color: "Baby Pink",
        image: "1789672026217.jpg"
      },
      {
        color: "Rosewood",
        image: "1789659236519 (1).jpg"
      },
      {
        color: "Pink",
        image: "1789659236519.jpg"
      }
    ]
  },

  {
    id: "chiffon7",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Dusty Grey",
        image: "1789655859702.jpg"
      },
      {
        color: "Grey",
        image: "1789655856246.jpg"
      }
    ]
  },

  {
    id: "chiffon8",
    name: "Crepe Chiffon Scarf",
    price: 220,
    products: [
      {
        color: "Dark Mauve",
        image: "1789664028182.jpg"
      },
      {
        color: "Mulberry",
        image: "1789672320095.jpg"
      },
      {
        color: "Lavender",
        image: "1789612119826.jpg"
      },
      {
        color: "Ice Mauve",
        image: "1789658699638.jpg"
      },
      {
        color: "Aubergine",
        image: "Aubergine.jpg"
      }
    ]
  },

  {
    id: "cuffs",
    name: "Wrist Cuffs",
    price: 100,
    products: [
      {
        color: "Sparkles",
        image: "1789701688187.jpg"
      },
      {
        color: "Lace",
        image: "1789701369378.jpg"
      },
      {
        color: "Tulle",
        image: "1789701870086.jpg"
      }
    ]
  }

];


/* =========================
   STORAGE
========================= */

function saveCart() {
  localStorage.setItem("israaCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("israaWishlist", JSON.stringify(wishlist));
}


/* =========================
   COUNTS
========================= */

function updateCartCount() {
  const el = document.getElementById("cartCount");

  if (el) {
    el.textContent = cart.length;
  }
}

function updateWishlistCount() {
  const el = document.getElementById("wishlistCount");

  if (el) {
    el.textContent = wishlist.length;
  }
}


/* =========================
   PRODUCT CATALOG
========================= */

function renderProductGroups() {

  const container = document.getElementById("productGroups");

  if (!container) return;

  container.innerHTML = "";

  /* Crystal */

  const crystalTitle = document.createElement("h2");
  crystalTitle.className = "section-title";
  crystalTitle.textContent = "Crystal Comfort Scarf";

  container.appendChild(crystalTitle);

  renderGroup(productGroups[0], container);


  /* Chiffon */

  const chiffonTitle = document.createElement("h2");
  chiffonTitle.className = "section-title";
  chiffonTitle.textContent = "Crepe Chiffon Scarf";

  container.appendChild(chiffonTitle);

  productGroups.slice(1, 9).forEach(group => {
    renderGroup(group, container);
  });


  /* Wrist Cuffs */

  const cuffsTitle = document.createElement("h2");
  cuffsTitle.className = "section-title";
  cuffsTitle.textContent = "Wrist Cuffs";

  container.appendChild(cuffsTitle);

  renderGroup(productGroups[9], container);
}


function renderGroup(group, container) {

  const groupDiv = document.createElement("div");
  groupDiv.className = "product-group";

  const windowDiv = document.createElement("div");
  windowDiv.className = "group-window";

  const track = document.createElement("div");
  track.className = "group-track";

  group.products.forEach((product, index) => {

    const card = document.createElement("div");
    card.className = "catalog-card";

    const key = `${group.id}-${product.color}`;

    const isWishlisted = wishlist.includes(key);

    card.innerHTML = `
      <button
        class="card-heart ${isWishlisted ? "active" : ""}"
        onclick="toggleWishlist('${group.id}', ${index})"
        aria-label="Wishlist"
      >
        ${isWishlisted ? "♥" : "♡"}
      </button>

      <img
        src="${product.image}"
        alt="${product.color}"
        onclick="openProduct('${group.id}', ${index})"
        style="cursor:pointer;"
      >

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

  windowDiv.appendChild(track);
  groupDiv.appendChild(windowDiv);

  container.appendChild(groupDiv);
}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(groupId, index) {

  const group = productGroups.find(g => g.id === groupId);

  if (!group || !group.products[index]) return;

  currentGroup = group;
  currentIndex = index;
  currentProduct = group.products[index];

  const overlay = document.getElementById("productOverlay");

  const image = document.getElementById("modalImage");
  const name = document.getElementById("modalName");
  const color = document.getElementById("modalColor");
  const price = document.getElementById("modalPrice");
  const wishlistButton = document.getElementById("modalWishlistButton");
  const addButton = document.getElementById("modalAddButton");

  if (!overlay) return;

  if (image) {
    image.src = currentProduct.image;
    image.alt = currentProduct.color;
  }

  if (name) {
    name.textContent = group.name;
  }

  if (color) {
    color.textContent = currentProduct.color;
  }

  if (price) {
    price.textContent = `${group.price} EGP`;
  }

  const key = `${group.id}-${currentProduct.color}`;
  const soldOut = currentProduct.soldOut === true;

  if (wishlistButton) {

    wishlistButton.textContent =
      wishlist.includes(key)
        ? "Remove from Wishlist"
        : "Add to Wishlist";

    wishlistButton.classList.toggle(
      "active",
      wishlist.includes(key)
    );
  }

  if (addButton) {

    addButton.disabled = soldOut;

    if (soldOut) {
      addButton.textContent = "Sold Out";
    } else {
      addButton.textContent = "Add to Cart";
    }
  }

  overlay.classList.add("active");
}


function closeProduct() {

  const overlay = document.getElementById("productOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }

  currentProduct = null;
  currentGroup = null;
}


function addCurrentProductToCart() {

  if (!currentGroup || !currentProduct) return;

  if (currentProduct.soldOut) return;

  addToCart(
    currentGroup.id,
    currentIndex
  );

  closeProduct();
}


/* =========================
   WISHLIST
========================= */

function toggleWishlist(groupId, index) {

  const group = productGroups.find(g => g.id === groupId);

  if (!group || !group.products[index]) return;

  const product = group.products[index];

  const key = `${group.id}-${product.color}`;

  if (wishlist.includes(key)) {

    wishlist = wishlist.filter(item => item !== key);

  } else {

    wishlist.push(key);

  }

  saveWishlist();
  updateWishlistCount();
  renderProductGroups();

  if (
    currentGroup &&
    currentGroup.id === groupId &&
    currentIndex === index
  ) {

    const button =
      document.getElementById("modalWishlistButton");

    if (button) {

      const active = wishlist.includes(key);

      button.textContent =
        active
          ? "Remove from Wishlist"
          : "Add to Wishlist";

      button.classList.toggle("active", active);
    }
  }
}


function openWishlist() {

  const overlay = document.getElementById("wishlistOverlay");
  const container = document.getElementById("wishlistItems");

  if (!overlay || !container) return;

  container.innerHTML = "";

  if (wishlist.length === 0) {

    container.innerHTML = `
      <p>Your wishlist is empty.</p>
    `;

    overlay.classList.add("active");
    return;
  }

  wishlist.forEach(key => {

    const separator = key.indexOf("-");

    const groupId = key.substring(0, separator);
    const color = key.substring(separator + 1);

    const group = productGroups.find(g => g.id === groupId);

    if (!group) return;

    const index = group.products.findIndex(
      product => product.color === color
    );

    if (index === -1) return;

    const product = group.products[index];

    const item = document.createElement("div");
    item.className = "wishlist-item";

    item.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.color}"
      >

      <div class="wishlist-item-info">
        <strong>${group.name}</strong>
        <p>${product.color}</p>
        <p>${group.price} EGP</p>
      </div>

      <button
        class="wishlist-remove"
        onclick="toggleWishlist('${group.id}', ${index}); openWishlist();"
      >
        Remove
      </button>
    `;

    container.appendChild(item);
  });

  overlay.classList.add("active");
}


function closeWishlist() {

  const overlay = document.getElementById("wishlistOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}


/* =========================
   CART
========================= */

function addToCart(groupId, index) {

  const group = productGroups.find(g => g.id === groupId);

  if (!group || !group.products[index]) return;

  const product = group.products[index];

  if (product.soldOut) return;

  const key = `${group.id}-${product.color}`;

  cart.push({
    key: key,
    groupId: group.id,
    color: product.color,
    image: product.image,
    name: group.name,
    price: group.price
  });

  saveCart();
  updateCartCount();

  showCartToast(`${product.color} added to your cart ♡`);
}


function removeFromCart(index) {

  if (index < 0 || index >= cart.length) return;

  cart.splice(index, 1);

  saveCart();
  updateCartCount();

  renderCart();
}


function openCart() {

  const overlay = document.getElementById("cartOverlay");

  if (!overlay) return;

  renderCart();

  overlay.classList.add("active");
}


function closeCart() {

  const overlay = document.getElementById("cartOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}


function getCartSubtotal() {

  return cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );
}


function renderCart() {

  const container = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {

    container.innerHTML = `
      <p>Your cart is empty.</p>
    `;

    if (subtotalEl) {
      subtotalEl.textContent = "0 EGP";
    }

    return;
  }

  cart.forEach((item, index) => {

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.color}"
      >

      <div>
        <strong>${item.name}</strong>
        <p>${item.color}</p>
        <p>${item.price} EGP</p>

        <button onclick="removeFromCart(${index})">
          Remove
        </button>
      </div>
    `;

    container.appendChild(div);
  });

  const subtotal = getCartSubtotal();

  if (subtotalEl) {
    subtotalEl.textContent = `${subtotal} EGP`;
  }
}


/* =========================
   TOAST
========================= */

function showCartToast(message) {

  const toast = document.getElementById("cartToast");
  const text = document.getElementById("cartToastText");

  if (!toast) return;

  if (text) {
    text.textContent = message;
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================
   CHECKOUT
========================= */

function openCheckout() {

  if (cart.length === 0) return;

  closeCart();

  const overlay = document.getElementById("checkoutOverlay");

  if (!overlay) return;

  updateCheckoutSummary();

  overlay.classList.add("active");
}


function closeCheckout() {

  const overlay = document.getElementById("checkoutOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}


function getShippingRate(governorate) {

  if (governorate === "Alexandria") {
    return shippingRates.Alexandria;
  }

  if (
    governorate === "Cairo" ||
    governorate === "Giza"
  ) {
    return shippingRates.Cairo;
  }

  if (
    governorate === "Upper Egypt" ||
    governorate === "Upper Nile"
  ) {
    return shippingRates.Upper;
  }

  if (governorate === "Red Sea") {
    return shippingRates.RedSea;
  }

  return shippingRates.Delta;
}


function updateCheckoutSummary() {

  const governorate =
    document.getElementById("governorate");

  const subtotal = getCartSubtotal();

  let shipping = 0;

  if (governorate && governorate.value) {
    shipping = getShippingRate(governorate.value);
  }

  const total = subtotal + shipping;

  const subtotalEl =
    document.getElementById("checkoutSubtotal");

  const shippingEl =
    document.getElementById("shippingFee");

  const totalEl =
    document.getElementById("checkoutTotal");

  if (subtotalEl) {
    subtotalEl.textContent = `${subtotal} EGP`;
  }

  if (shippingEl) {
    shippingEl.textContent = `${shipping} EGP`;
  }

  if (totalEl) {
    totalEl.textContent = `${total} EGP`;
  }
}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

  if (cart.length === 0) return;

  const name =
    document.getElementById("customerName")?.value.trim();

  const phone =
    document.getElementById("customerPhone")?.value.trim();

  const governorate =
    document.getElementById("governorate")?.value;

  const address =
    document.getElementById("customerAddress")?.value.trim();

  const payment =
    document.getElementById("paymentMethod")?.value;

  if (
    !name ||
    !phone ||
    !governorate ||
    !address ||
    !payment
  ) {

    alert("Please fill in all required fields.");
    return;
  }

  const subtotal = getCartSubtotal();

  const shipping = getShippingRate(governorate);

  const total = subtotal + shipping;

  let message = "";

  message += "Hello Israa Boutique, I would like to place an order.%0A%0A";

  message += "Order:%0A";

  cart.forEach((item, index) => {

    message +=
      `${index + 1}. ${item.name} - ${item.color} - ${item.price} EGP%0A`;
  });

  message += `%0ASubtotal: ${subtotal} EGP%0A`;
  message += `Shipping Fee: ${shipping} EGP%0A`;
  message += `Total: ${total} EGP%0A%0A`;

  message += `Name: ${encodeURIComponent(name)}%0A`;
  message += `Phone: ${encodeURIComponent(phone)}%0A`;
  message += `Governorate: ${encodeURIComponent(governorate)}%0A`;
  message += `Address: ${encodeURIComponent(address)}%0A`;
  message += `Payment Method: ${encodeURIComponent(payment)}%0A`;

  const url =
    `https://wa.me/${whatsapp}?text=${message}`;

  window.open(url, "_blank");
}


/* =========================
   QUIZ
========================= */

function getQuizResult() {

  const answers = {

    undertone:
      document.querySelector(
        'input[name="undertone"]:checked'
      )?.value,

    brightness:
      document.querySelector(
        'input[name="brightness"]:checked'
      )?.value,

    palette:
      document.querySelector(
        'input[name="palette"]:checked'
      )?.value

  };

  if (
    !answers.undertone ||
    !answers.brightness ||
    !answers.palette
  ) {

    alert("Please answer all questions first.");
    return;
  }

  const scores = {};

  const addScore = (colors, points) => {

    colors.forEach(color => {

      scores[color] =
        (scores[color] || 0) + points;

    });
  };


  /* Undertone */

  if (answers.undertone === "warm") {

    addScore(
      ["Café", "Caramel", "Sahara", "Beige"],
      3
    );

    addScore(
      ["Maroon", "Olive Green", "Petroleum"],
      2
    );
  }

  if (answers.undertone === "cool") {

    addScore(
      ["Lavender", "Baby Blue", "Dusty Blue", "Ice Mauve"],
      3
    );

    addScore(
      ["Navy", "Midnight", "Aubergine", "Mulberry"],
      2
    );
  }

  if (answers.undertone === "neutral") {

    addScore(
      ["Cream", "Off White", "Taupe", "Dusty Rose"],
      3
    );

    addScore(
      ["Dark Mauve", "Rosewood", "Slate Gray", "Grey"],
      2
    );
  }


  /* Brightness */

  if (answers.brightness === "light") {

    addScore(
      [
        "Cream",
        "Off White",
        "Beige",
        "Light Beige",
        "Lavender",
        "Baby Blue",
        "Dusty Blue",
        "Mint Green",
        "Dusty Rose",
        "Peach"
      ],
      2
    );
  }

  if (answers.brightness === "dark") {

    addScore(
      [
        "Navy",
        "Midnight",
        "Aubergine",
        "Mulberry",
        "Maroon",
        "Petroleum",
        "Dark Mauve",
        "Rosewood",
        "Slate Gray",
        "Olive Green"
      ],
      2
    );
  }


  /* Palette */

  if (answers.palette === "earthy") {

    addScore(
      [
        "Café",
        "Caramel",
        "Sahara",
        "Beige",
        "Taupe",
        "Maroon"
      ],
      4
    );
  }

  if (answers.palette === "soft") {

    addScore(
      [
        "Lavender",
        "Baby Blue",
        "Dusty Blue",
        "Ice Mauve",
        "Cream",
        "Dusty Rose"
      ],
      4
    );
  }

  if (answers.palette === "green") {

    addScore(
      [
        "Mint Green",
        "Pistachio",
        "Olive Green",
        "Light Olive Green"
      ],
      5
    );
  }

  if (answers.palette === "deep") {

    addScore(
      [
        "Maroon",
        "Mulberry",
        "Aubergine",
        "Midnight",
        "Navy",
        "Petroleum"
      ],
      4
    );
  }


  const sortedColors =
    Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);


  let recommendedColor =
    sortedColors[0];

  let recommendedGroup = null;
  let recommendedIndex = -1;


  for (const color of sortedColors) {

    for (const group of productGroups) {

      const index =
        group.products.findIndex(
          product => product.color === color
        );

      if (index !== -1) {

        recommendedColor = color;
        recommendedGroup = group;
        recommendedIndex = index;

        break;
      }
    }

    if (recommendedGroup) break;
  }


  if (
    !recommendedGroup ||
    recommendedIndex === -1
  ) {
    return;
  }


  const product =
    recommendedGroup.products[recommendedIndex];

  const result =
    document.getElementById("quizResult");

  const resultImage =
    document.getElementById("quizResultImage");

  const resultName =
    document.getElementById("quizResultName");

  const resultColor =
    document.getElementById("quizResultColor");

  const viewButton =
    document.getElementById("quizViewButton");


  if (result) {
    result.classList.add("active");
  }

  if (resultImage) {
    resultImage.src = product.image;
    resultImage.alt = recommendedColor;
  }

  if (resultName) {
    resultName.textContent = recommendedGroup.name;
  }

  if (resultColor) {
    resultColor.textContent = recommendedColor;
  }

  if (viewButton) {

    viewButton.onclick = function () {

      openProduct(
        recommendedGroup.id,
        recommendedIndex
      );

    };
  }
}


/* =========================
   MODAL CLOSE
========================= */

function closeOverlayById(id) {

  const overlay = document.getElementById(id);

  if (overlay) {
    overlay.classList.remove("active");
  }
}


/* =========================
   SWIPE SUPPORT
========================= */

let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {

  if (!currentGroup) return;

  const difference =
    touchEndX - touchStartX;

  if (Math.abs(difference) < 50) return;

  if (difference < 0) {

    currentIndex++;

    if (
      currentIndex >=
      currentGroup.products.length
    ) {
      currentIndex = 0;
    }

  } else {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex =
        currentGroup.products.length - 1;
    }
  }

  openProduct(
    currentGroup.id,
    currentIndex
  );
}


document.addEventListener(
  "touchstart",
  function (event) {

    touchStartX =
      event.changedTouches[0].screenX;

  },
  { passive: true }
);


document.addEventListener(
  "touchend",
  function (event) {

    touchEndX =
      event.changedTouches[0].screenX;

    const overlay =
      document.getElementById("productOverlay");

    if (
      overlay &&
      overlay.classList.contains("active")
    ) {
      handleSwipe();
    }

  },
  { passive: true }
);


/* =========================
   INITIALIZE
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderProductGroups();

    updateCartCount();

    updateWishlistCount();


    const governorate =
      document.getElementById("governorate");

    if (governorate) {

      governorate.addEventListener(
        "change",
        updateCheckoutSummary
      );

    }


    /* Make inline HTML buttons
       explicitly available globally */

    window.openProduct = openProduct;
    window.closeProduct = closeProduct;

    window.toggleWishlist = toggleWishlist;
    window.openWishlist = openWishlist;
    window.closeWishlist = closeWishlist;

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.openCart = openCart;
    window.closeCart = closeCart;

    window.openCheckout = openCheckout;
    window.closeCheckout = closeCheckout;
    window.placeOrder = placeOrder;

    window.addCurrentProductToCart =
      addCurrentProductToCart;

    window.getQuizResult =
      getQuizResult;

    window.closeOverlayById =
      closeOverlayById;

  }
);


/* In case the HTML loads
   before DOMContentLoaded */

window.openProduct = openProduct;
window.closeProduct = closeProduct;

window.toggleWishlist = toggleWishlist;
window.openWishlist = openWishlist;
window.closeWishlist = closeWishlist;

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;

window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.placeOrder = placeOrder;

window.addCurrentProductToCart =
  addCurrentProductToCart;

window.getQuizResult =
  getQuizResult;
