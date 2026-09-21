const whatsapp = "201021755186";

const shippingRates = {
  Alexandria: 50,

  Cairo: 80,
  Giza: 80,

  Beheira: 80,
  Dakahlia: 80,
  Damietta: 80,
  Gharbia: 80,
  "Kafr El Sheikh": 80,
  Monufia: 80,
  Qalyubia: 80,
  Sharqia: 80,

  "Port Said": 80,
  Suez: 80,
  Ismailia: 80,

  Aswan: 100,
  Asyut: 100,
  "Beni Suef": 100,
  Fayoum: 100,
  Luxor: 100,
  Minya: 100,
  Qena: 100,
  Sohag: 100,

  "Red Sea": 120,

  "North Sinai": 100,
  "South Sinai": 120,

  Matrouh: 100,
  "New Valley": 100
};


const productGroups = [

  {
    id: "crystal",
    name: "Crystal Comfort Scarf",
    price: 150,
    colors: [
      {
        color: "Mint Green",
        image: "1789663443949.jpg",
        soldOut: false
      },
      {
        color: "Lavender",
        image: "1789663513275.jpg",
        soldOut: false
      },
      {
        color: "Café",
        image: "1789663143161.jpg",
        soldOut: false
      },
      {
        color: "Slate Gray",
        image: "slate-gray.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon1",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Sahara",
        image: "1789653340773.jpg",
        soldOut: false
      },
      {
        color: "Taupe",
        image: "1789653276516.jpg",
        soldOut: false
      },
      {
        color: "Light Beige",
        image: "1789666550479.jpg",
        soldOut: false
      },
      {
        color: "Beige",
        image: "1789666385502.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon2",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "White",
        image: "1789612810611.jpg",
        soldOut: false
      },
      {
        color: "Off White",
        image: "1789656243041.jpg",
        soldOut: false
      },
      {
        color: "Ice Grey",
        image: "1789656096412.jpg",
        soldOut: false
      },
      {
        color: "Cream",
        image: "cream.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon3",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Mint Green",
        image: "1789656901442.jpg",
        soldOut: false
      },
      {
        color: "Pistachio",
        image: "1789657273597.jpg",
        soldOut: false
      },
      {
        color: "Light Olive Green",
        image: "Light.olive.green.jpg",
        soldOut: false
      },
      {
        color: "Olive Green",
        image: "1789658305384.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon4",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Baby Blue",
        image: "1789661119267.jpg",
        soldOut: false
      },
      {
        color: "Dusty Blue",
        image: "1789653467598.jpg",
        soldOut: false
      },
      {
        color: "Ocean Blue",
        image: "1789653590293.jpg",
        soldOut: false
      },
      {
        color: "Petroleum",
        image: "1789609239720.jpg",
        soldOut: false
      },
      {
        color: "Navy",
        image: "1789661581244.jpg",
        soldOut: false
      },
      {
        color: "Midnight",
        image: "1789654089295.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon5",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Peach",
        image: "1789662261446.jpg",
        soldOut: false
      },
      {
        color: "Coral",
        image: "1789662069402.jpg",
        soldOut: false
      },
      {
        color: "Orange",
        image: "1789609303020.jpg",
        soldOut: false
      },
      {
        color: "Red",
        image: "1789609437413.jpg",
        soldOut: false
      },
      {
        color: "Caramel",
        image: "1789670850781.jpg",
        soldOut: false
      },
      {
        color: "Maroon",
        image: "1789661509678.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon6",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Dusty Rose",
        image: "1789659142918.jpg",
        soldOut: false
      },
      {
        color: "Baby Pink",
        image: "1789672026217.jpg",
        soldOut: false
      },
      {
        color: "Rosewood",
        image: "1789659236519 (1).jpg",
        soldOut: false
      },
      {
        color: "Pink",
        image: "1789659236519.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon7",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Dusty Grey",
        image: "1789655859702.jpg",
        soldOut: false
      },
      {
        color: "Grey",
        image: "1789655856246.jpg",
        soldOut: false
      }
    ]
  },

  {
    id: "chiffon8",
    name: "Crepe Chiffon Scarf",
    price: 200,
    colors: [
      {
        color: "Dark Mauve",
        image: "1789664028182.jpg",
        soldOut: false
      },
      {
        color: "Mulberry",
        image: "1789672320095.jpg",
        soldOut: false
      },
      {
        color: "Lavender",
        image: "1789612119826.jpg",
        soldOut: false
      },
      {
        color: "Ice Mauve",
        image: "1789658699638.jpg",
        soldOut: false
      },
      {
        color: "Aubergine",
        image: "Aubergine.jpg",
        soldOut: false
      }
    ]
  },
  {
  id: "lycraJersey1",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Blush Pink", image: "Blushpink.lycra.png", soldOut: false },
    { color: "Baby Pink", image: "Babypink.lycra.png", soldOut: false },
    { color: "Hot Pink", image: "Hotpink.lycra.png", soldOut: false },
    { color: "Lavender", image: "Lavender.lycra.png", soldOut: false },
    { color: "Mulberry", image: "Mullberry.lycra.png", soldOut: false },
    { color: "Aubergine", image: "Aubergine.lycra.png", soldOut: false }
  ]
},

{
  id: "lycraJersey2",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "White", image: "1790024126134.png", soldOut: false },
    { color: "Black", image: "1790024132101.png", soldOut: false }
  ]
},

{
  id: "lycraJersey3",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Turmeric Yellow", image: "1790024672765.png", soldOut: false },
    { color: "Deep Turmeric Yellow", image: "1790024594027.png", soldOut: false }
  ]
},

{
  id: "lycraJersey4",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Red", image: "1790023642773.png", soldOut: false },
    { color: "Burgundy", image: "1790023923078.png", soldOut: false },
    { color: "Maroon", image: "1790023682274.png", soldOut: false }
  ]
},

{
  id: "lycraJersey5",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Pistachio", image: "1790022895515.png", soldOut: false },
    { color: "Olive Green", image: "1790022837937.png", soldOut: false }
  ]
},

{
  id: "lycraJersey6",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Light Beige", image: "Lightbeige.lycra.png", soldOut: false },
    { color: "Grey", image: "Grey.lycra.png", soldOut: false },
    { color: "Dark Grey", image: "Darkgrey.lycra.png", soldOut: false }
  ]
},

{
  id: "lycraJersey7",
  name: "Lycra Jersey Scarf",
  price: 200,
  colors: [
    { color: "Baby Blue", image: "1790024478663.png", soldOut: false },
    { color: "Hot Blue", image: "1790023046886.png", soldOut: false },
    { color: "Petroleum", image: "1789960790700.png", soldOut: false },
    { color: "Navy", image: "1789960834834.png", soldOut: false }
  ]
},

  {
    id: "wristCuffs",
    name: "Wrist Cuffs",
    price: 100,
    colors: [
      {
        color: "Sparkles",
        image: "1789701688187.jpg",
        soldOut: false
      },
      {
        color: "Lace",
        image: "1789701369378.jpg",
        soldOut: false
      },
      {
        color: "Tulle",
        image: "1789701870086.jpg",
        soldOut: false
      }
    ]
  }

];


let cart =
  JSON.parse(localStorage.getItem("israaCart")) || [];

let wishlist =
  JSON.parse(localStorage.getItem("israaWishlist")) || [];

let currentGroup = null;
let currentIndex = 0;


/* PRODUCT CATALOG */

function renderProductGroups() {

  const catalog =
    document.getElementById("productCatalog");

  if (!catalog) return;

  catalog.innerHTML = "";


  const crystalTitle =
    document.createElement("h2");

  crystalTitle.className =
    "section-title";

  crystalTitle.textContent =
    "Crystal Comfort Scarf";

  catalog.appendChild(crystalTitle);

  createProductWindow(
    catalog,
    productGroups[0]
  );


  const chiffonTitle =
    document.createElement("h2");

  chiffonTitle.className =
    "section-title";

  chiffonTitle.textContent =
    "Crepe Chiffon Scarf";

  catalog.appendChild(chiffonTitle);


  productGroups
    .slice(1, 9)
    .forEach(group => {

      createProductWindow(
        catalog,
        group
      );

    });


  const lycraTitle = document.createElement("h2");
lycraTitle.className = "section-title";
lycraTitle.textContent = "Lycra Jersey Scarf";
catalog.appendChild(lycraTitle);

productGroups
  .slice(9, 16)
  .forEach(group => {
    createProductWindow(catalog, group);
  });

const wristCuffsTitle = document.createElement("h2");
wristCuffsTitle.className = "section-title";
wristCuffsTitle.textContent = "Wrist Cuffs";
catalog.appendChild(wristCuffsTitle);

createProductWindow(catalog, productGroups[16]);

}


function createProductWindow(
  catalog,
  group
) {

  const groupSection =
    document.createElement("div");

  groupSection.className =
    "product-group";


  groupSection.innerHTML = `
    <div class="group-window">
      <div class="group-track"></div>
    </div>
  `;


  catalog.appendChild(groupSection);


  const track =
    groupSection.querySelector(
      ".group-track"
    );


  group.colors.forEach(
    (product, index) => {

      const card =
        document.createElement("div");

      card.className =
        "catalog-card";


      const key =
        getProductKey(group.id, index);

      const isWishlisted =
        wishlist.includes(key);


      card.innerHTML = `

        ${
          product.soldOut
            ? `<div class="sold-out">SOLD OUT</div>`
            : ""
        }

        <button
          class="card-heart ${
            isWishlisted ? "active" : ""
          }"
          onclick="toggleWishlist('${group.id}', ${index})"
          aria-label="Wishlist"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

        <img
          src="${product.image}"
          alt="${product.color}"
        >

        <div class="catalog-info">

          <span>${product.color}</span>

          <span>${group.price} EGP</span>

          <button
            class="${
              product.soldOut
                ? "sold-out-button"
                : ""
            }"
            ${
              product.soldOut
                ? "disabled"
                : ""
            }
            onclick="openProduct('${group.id}', ${index})"
          >
            ${
              product.soldOut
                ? "Sold Out"
                : "View"
            }
          </button>

        </div>
      `;


      track.appendChild(card);

    }
  );

}


/* PRODUCT MODAL */

function openProduct(
  groupId,
  index
) {

  const group =
    productGroups.find(
      item => item.id === groupId
    );

  if (!group) return;

  currentGroup = group;
  currentIndex = index;

  updateProductModal();

  document
    .getElementById("productOverlay")
    .classList.add("active");

}


function updateProductModal() {

  if (!currentGroup) return;

  const product =
    currentGroup.colors[currentIndex];


  document.getElementById(
    "modalImage"
  ).src = product.image;


  document.getElementById(
    "modalImage"
  ).alt = product.color;


  document.getElementById(
    "modalName"
  ).textContent =
    currentGroup.name;


  document.getElementById(
    "modalColor"
  ).textContent =
    product.color;


  document.getElementById(
    "modalPrice"
  ).textContent =
    currentGroup.price;


  const addButton =
    document.getElementById(
      "modalAddButton"
    );


  if (product.soldOut) {

    addButton.disabled = true;

    addButton.textContent =
      "SOLD OUT";

  } else {

    addButton.disabled = false;

    addButton.textContent =
      "Add to Cart";

  }


  updateModalWishlistButton();

}


function updateModalWishlistButton() {

  if (!currentGroup) return;

  const key =
    getProductKey(
      currentGroup.id,
      currentIndex
    );

  const button =
    document.getElementById(
      "modalWishlistButton"
    );

  if (!button) return;


  if (wishlist.includes(key)) {

    button.classList.add("active");

    button.textContent =
      "♥ Added to Wishlist";

  } else {

    button.classList.remove("active");

    button.textContent =
      "♡ Add to Wishlist";

  }

}


function nextProduct() {

  if (!currentGroup) return;

  currentIndex++;

  if (
    currentIndex >=
    currentGroup.colors.length
  ) {
    currentIndex = 0;
  }

  updateProductModal();

}


function previousProduct() {

  if (!currentGroup) return;

  currentIndex--;

  if (currentIndex < 0) {

    currentIndex =
      currentGroup.colors.length - 1;

  }

  updateProductModal();

}


function closeProduct() {

  document
    .getElementById("productOverlay")
    .classList.remove("active");

}


/* SWIPE */

let touchStartX = 0;

document.addEventListener(
  "touchstart",
  event => {

    if (!event.touches.length) return;

    touchStartX =
      event.touches[0].clientX;

  }
);


document.addEventListener(
  "touchend",
  event => {

    if (!touchStartX) return;

    const overlay =
      document.getElementById(
        "productOverlay"
      );


    if (
      !overlay.classList.contains(
        "active"
      )
    ) {

      touchStartX = 0;
      return;

    }


    const touchEndX =
      event.changedTouches[0].clientX;


    const difference =
      touchStartX - touchEndX;


    if (Math.abs(difference) > 50) {

      if (difference > 0) {

        nextProduct();

      } else {

        previousProduct();

      }

    }


    touchStartX = 0;

  }
);


/* PRODUCT KEY */

function getProductKey(
  groupId,
  index
) {

  return groupId + "-" + index;

}


/* WISHLIST */

function saveWishlist() {

  localStorage.setItem(
    "israaWishlist",
    JSON.stringify(wishlist)
  );

  updateWishlistCount();

}


function updateWishlistCount() {

  const count =
    document.getElementById(
      "wishlistCount"
    );

  if (!count) return;

  count.textContent =
    wishlist.length;

}


function toggleWishlist(
  groupId,
  index
) {

  const key =
    getProductKey(
      groupId,
      index
    );


  const position =
    wishlist.indexOf(key);


  if (position === -1) {

    wishlist.push(key);

  } else {

    wishlist.splice(position, 1);

  }


  saveWishlist();

  renderProductGroups();

  updateModalWishlistButton();

}


function toggleCurrentWishlist() {

  if (!currentGroup) return;

  toggleWishlist(
    currentGroup.id,
    currentIndex
  );

}


function openWishlist() {

  renderWishlist();

  document
    .getElementById("wishlistOverlay")
    .classList.add("active");

}


function closeWishlist() {

  document
    .getElementById("wishlistOverlay")
    .classList.remove("active");

}


function renderWishlist() {

  const container =
    document.getElementById(
      "wishlistItems"
    );

  if (!container) return;


  container.innerHTML = "";


  if (wishlist.length === 0) {

    container.innerHTML =
      "<p>Your wishlist is empty ♡</p>";

    return;

  }


  wishlist.forEach(key => {

    const parts =
      key.split("-");

    const groupId =
      parts[0];

    const index =
      Number(parts[1]);


    const group =
      productGroups.find(
        item => item.id === groupId
      );

    if (!group) return;


    const product =
      group.colors[index];

    if (!product) return;


    const item =
      document.createElement("div");

    item.className =
      "wishlist-item";


    item.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.color}"
      >

      <div class="wishlist-item-info">

        <strong>${product.color}</strong>

        <p>${group.price} EGP</p>

        ${
          product.soldOut
            ? `<p class="sold-out-text">SOLD OUT</p>`
            : ""
        }

      </div>

      <button
        class="wishlist-remove"
        onclick="removeFromWishlist('${key}')"
      >
        Remove
      </button>

    `;


    container.appendChild(item);

  });

}


function removeFromWishlist(key) {

  wishlist =
    wishlist.filter(
      item => item !== key
    );

  saveWishlist();

  renderWishlist();

  renderProductGroups();

  updateModalWishlistButton();

}


/* CART */

function saveCart() {

  localStorage.setItem(
    "israaCart",
    JSON.stringify(cart)
  );

  updateCartCount();

}


function updateCartCount() {

  const count =
    document.getElementById(
      "cartCount"
    );

  if (!count) return;

  count.textContent =
    cart.length;

}


function addCurrentProduct() {

  if (!currentGroup) return;

  const product =
    currentGroup.colors[currentIndex];


  if (product.soldOut) return;


  cart.push({

    name: currentGroup.name,

    color: product.color,

    price: currentGroup.price,

    image: product.image

  });


  saveCart();

  showCartToast(
    product.color
  );

  closeProduct();

}


function showCartToast(color) {

  const toast =
    document.getElementById(
      "cartToast"
    );

  const message =
    document.getElementById(
      "toastMessage"
    );

  if (!toast || !message) return;


  message.textContent =
    color
      ? `${color} added to your cart`
      : "Added to your cart";


  toast.classList.add("show");


  clearTimeout(
    window.cartToastTimer
  );


  window.cartToastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

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


function getCartSubtotal() {

  return cart.reduce(
    (sum, item) =>
      sum + Number(item.price),
    0
  );

}


function getSelectedShipping() {

  const governorate =
    document.getElementById(
      "governorate"
    )?.value;


  if (!governorate) return 0;

  return shippingRates[
    governorate
  ] || 0;

}


function renderCart() {

  const container =
    document.getElementById(
      "cartItems"
    );

  const subtotalElement =
    document.getElementById(
      "cartSubtotal"
    );

  const shippingElement =
    document.getElementById(
      "cartShipping"
    );

  const totalElement =
    document.getElementById(
      "cartTotal"
    );


  if (
    !container ||
    !subtotalElement ||
    !shippingElement ||
    !totalElement
  ) return;


  container.innerHTML = "";


  if (cart.length === 0) {

    container.innerHTML =
      "<p>Your cart is empty.</p>";

  }


  cart.forEach(
    (item, index) => {

      const row =
        document.createElement("div");

      row.className =
        "cart-item";


      row.innerHTML = `

        <img
          src="${item.image}"
          alt="${item.color}"
        >

        <div>

          <strong>${item.name}</strong>

          <p>${item.color}</p>

          <p>${item.price} EGP</p>

          <button
            onclick="removeFromCart(${index})"
          >
            Remove
          </button>

        </div>

      `;


      container.appendChild(row);

    }
  );


  const subtotal =
    getCartSubtotal();


  /*
    Shipping is calculated
    after the customer selects
    the governorate at checkout.
  */

  const shipping =
    getSelectedShipping();


  subtotalElement.textContent =
    subtotal;


  shippingElement.textContent =
    shipping;


  totalElement.textContent =
    subtotal + shipping;

}


/* REMOVE CART ITEM */

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();

}


/* CHECKOUT */

function openCheckout() {

  if (cart.length === 0) {

    alert(
      "Your cart is empty"
    );

    return;

  }


  closeCart();


  const governorate =
    document.getElementById(
      "governorate"
    );


  if (governorate) {

    governorate.value = "";

  }


  updateCheckoutShipping();


  document
    .getElementById(
      "checkoutOverlay"
    )
    .classList.add("active");

}


function closeCheckout() {

  document
    .getElementById(
      "checkoutOverlay"
    )
    .classList.remove("active");

}


function updateCheckoutShipping() {

  const subtotal =
    getCartSubtotal();


  const shipping =
    getSelectedShipping();


  const total =
    subtotal + shipping;


  const subtotalElement =
    document.getElementById(
      "checkoutSubtotal"
    );

  const shippingElement =
    document.getElementById(
      "checkoutShipping"
    );

  const totalElement =
    document.getElementById(
      "checkoutTotal"
    );


  if (subtotalElement) {

    subtotalElement.textContent =
      subtotal;

  }


  if (shippingElement) {

    shippingElement.textContent =
      shipping;

  }


  if (totalElement) {

    totalElement.textContent =
      total;

  }

}


/* PLACE ORDER */

function placeOrder(event) {

  event.preventDefault();


  if (cart.length === 0) {

    alert(
      "Your cart is empty"
    );

    return;

  }


  const name =
    document.getElementById(
      "customerName"
    ).value.trim();


  const phone =
    document.getElementById(
      "customerPhone"
    ).value.trim();


  const governorate =
    document.getElementById(
      "governorate"
    ).value;


  const address =
    document.getElementById(
      "customerAddress"
    ).value.trim();


  const shipping =
    shippingRates[
      governorate
    ] || 0;


  const subtotal =
    getCartSubtotal();


  const total =
    subtotal + shipping;


  let message =
    "New Order - Israa Boutique\n\n";


  message +=
    "Name: " +
    name +
    "\n";


  message +=
    "Phone: " +
    phone +
    "\n";


  message +=
    "Governorate: " +
    governorate +
    "\n";


  message +=
    "Address: " +
    address +
    "\n\n";


  message +=
    "Products:\n";


  cart.forEach(
    (item, index) => {

      message +=
        `${index + 1}. ` +
        `${item.name} - ` +
        `${item.color} - ` +
        `${item.price} EGP\n`;

    }
  );


  message +=
    "\nSubtotal: " +
    subtotal +
    " EGP";


  message +=
    "\nShipping Fee: " +
    shipping +
    " EGP";


  message +=
    "\nTotal: " +
    total +
    " EGP";


  message +=
    "\nPayment Method: Vodafone Cash";


  message +=
    "\nVodafone Cash Number: 01021755186";


  message +=
    "\n\nPlease transfer the full amount before placing your order to secure your order.";


  const url =
    "https://wa.me/" +
    whatsapp +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    url,
    "_blank"
  );


  cart = [];

  saveCart();

  closeCheckout();

}


/* QUIZ */

function getRecommendation() {

  const undertone =
    document.querySelector(
      'input[name="undertone"]:checked'
    )?.value;


  const brightness =
    document.querySelector(
      'input[name="brightness"]:checked'
    )?.value;


  const palette =
    document.querySelector(
      'input[name="palette"]:checked'
    )?.value;


  const result =
    document.getElementById(
      "quizResult"
    );


  if (
    !undertone ||
    !brightness ||
    !palette
  ) {

    result.innerHTML =
      "<p>Please answer all three questions ♡</p>";

    result.classList.add(
      "active"
    );

    return;

  }


  const scores = {};


  function addScore(
    color,
    points
  ) {

    scores[color] =
      (scores[color] || 0) +
      points;

  }


  /*
    Undertone
  */

  if (undertone === "warm") {

    [
      "Café",
      "Caramel",
      "Sahara",
      "Beige"
    ].forEach(
      color => addScore(color, 3)
    );

    [
      "Maroon",
      "Olive Green",
      "Petroleum"
    ].forEach(
      color => addScore(color, 2)
    );

  }


  if (undertone === "cool") {

    [
      "Lavender",
      "Baby Blue",
      "Dusty Blue",
      "Ice Mauve"
    ].forEach(
      color => addScore(color, 3)
    );

    [
      "Navy",
      "Midnight",
      "Aubergine",
      "Mulberry"
    ].forEach(
      color => addScore(color, 2)
    );

  }


  if (undertone === "neutral") {

    [
      "Cream",
      "Off White",
      "Taupe",
      "Dusty Rose"
    ].forEach(
      color => addScore(color, 3)
    );

    [
      "Dark Mauve",
      "Rosewood",
      "Slate Gray",
      "Grey"
    ].forEach(
      color => addScore(color, 2)
    );

  }


  /*
    Light / Dark preference
  */

  if (brightness === "light") {

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
    ].forEach(
      color => addScore(color, 2)
    );

  }


  if (brightness === "dark") {

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
    ].forEach(
      color => addScore(color, 2)
    );

  }


  /*
    Palette
  */

  if (palette === "earthy") {

    [
      "Café",
      "Caramel",
      "Sahara",
      "Beige",
      "Taupe",
      "Maroon"
    ].forEach(
      color => addScore(color, 4)
    );

  }


  if (palette === "soft") {

    [
      "Lavender",
      "Baby Blue",
      "Dusty Blue",
      "Ice Mauve",
      "Cream",
      "Dusty Rose"
    ].forEach(
      color => addScore(color, 4)
    );

  }


  if (palette === "green") {

    [
      "Mint Green",
      "Pistachio",
      "Olive Green",
      "Light Olive Green"
    ].forEach(
      color => addScore(color, 5)
    );

  }


  if (palette === "deep") {

    [
      "Maroon",
      "Mulberry",
      "Aubergine",
      "Midnight",
      "Navy",
      "Petroleum"
    ].forEach(
      color => addScore(color, 4)
    );

  }


  /*
    Find highest scoring
    available color.
  */

  const sortedColors =
    Object.keys(scores)
      .sort(
        (a, b) =>
          scores[b] -
          scores[a]
      );


  let recommendation = null;


  for (
    const color of sortedColors
  ) {

    for (
      const group of productGroups
    ) {

      const index =
        group.colors.findIndex(
          item =>
            item.color === color &&
            !item.soldOut
        );


      if (index !== -1) {

        recommendation = {
          group,
          index,
          product:
            group.colors[index]
        };

        break;

      }

    }


    if (recommendation) break;

  }


  if (!recommendation) {

    result.innerHTML =
      "<p>We couldn't find an available recommendation right now.</p>";

    result.classList.add(
      "active"
    );

    return;

  }


  const {
    group,
    index,
    product
  } = recommendation;


  result.innerHTML = `

    <h3>Your recommended color is ${product.color} ♡</h3>

    <img
      src="${product.image}"
      alt="${product.color}"
    >

    <p>${group.price} EGP</p>

    <button
      class="quiz-view-button"
      onclick="openProduct('${group.id}', ${index})"
    >
      View Product
    </button>

  `;


  result.classList.add(
    "active"
  );

}


/* START */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProductGroups();

    updateCartCount();

    updateWishlistCount();

  }
);
