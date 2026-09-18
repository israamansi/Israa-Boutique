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
    items: [
      { color: "Mint Green", image: "1789663443949.jpg", soldOut: false },
      { color: "Lavender", image: "1789663513275.jpg", soldOut: false },
      { color: "Café", image: "1789663143161.jpg", soldOut: false },
      { color: "Slate Gray", image: "slate-gray.jpg", soldOut: false }
    ]
  },


  {
    id: "chiffon1",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Sahara", image: "1789653340773.jpg", soldOut: false },
      { color: "Taupe", image: "1789653276516.jpg", soldOut: false },
      { color: "Light Beige", image: "1789666550479.jpg", soldOut: false },
      { color: "Beige", image: "1789666385502.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon2",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "White", image: "1789612810611.jpg", soldOut: false },
      { color: "Off White", image: "1789656243041.jpg", soldOut: false },
      { color: "Ice Grey", image: "1789656096412.jpg", soldOut: false },
      { color: "Cream", image: "cream.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon3",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Mint Green", image: "1789656901442.jpg", soldOut: false },
      { color: "Pistachio", image: "1789657273597.jpg", soldOut: false },
      { color: "Light Olive Green", image: "Light.olive.green.jpg", soldOut: false },
      { color: "Olive Green", image: "1789658305384.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon4",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Baby Blue", image: "1789661119267.jpg", soldOut: false },
      { color: "Dusty Blue", image: "1789653467598.jpg", soldOut: false },
      { color: "Ocean Blue", image: "1789653590293.jpg", soldOut: false },
      { color: "Petroleum", image: "1789609239720.jpg", soldOut: false },
      { color: "Navy", image: "1789661581244.jpg", soldOut: false },
      { color: "Midnight", image: "1789654089295.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon5",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Peach", image: "1789662261446.jpg", soldOut: false },
      { color: "Coral", image: "1789662069402.jpg", soldOut: false },
      { color: "Orange", image: "1789609303020.jpg", soldOut: false },
      { color: "Red", image: "1789609437413.jpg", soldOut: false },
      { color: "Caramel", image: "1789670850781.jpg", soldOut: false },
      { color: "Maroon", image: "1789661509678.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon6",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Dusty Rose", image: "1789659142918.jpg", soldOut: false },
      { color: "Baby Pink", image: "1789672026217.jpg", soldOut: false },
      { color: "Rosewood", image: "1789659236519 (1).jpg", soldOut: false },
      { color: "Pink", image: "1789659236519.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon7",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Dusty Grey", image: "1789655859702.jpg", soldOut: false },
      { color: "Grey", image: "1789655856246.jpg", soldOut: false }
    ]
  },

  {
    id: "chiffon8",
    name: "Crepe Chiffon Scarf",
    price: 220,
    items: [
      { color: "Dark Mauve", image: "1789664028182.jpg", soldOut: false },
      { color: "Mulberry", image: "1789672320095.jpg", soldOut: false },
      { color: "Lavender", image: "1789612119826.jpg", soldOut: false },
      { color: "Ice Mauve", image: "1789658699638.jpg", soldOut: false },
      { color: "Aubergine", image: "Aubergine.jpg", soldOut: false }
    ]
  },


  /* WRIST CUFFS */
  {
    id: "wristCuffs",
    name: "Wrist Cuffs",
    price: 100,
    items: [
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


let cart = JSON.parse(localStorage.getItem("israaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("israaWishlist")) || [];


// Update old chiffon items in existing cart to the new price
cart = cart.map(item => {
  if (item.name === "Crepe Chiffon Scarf") {
    return { ...item, price: 220 };
  }
  return item;
});

localStorage.setItem("israaCart", JSON.stringify(cart));


let currentGroup = null;
let currentIndex = 0;


/* =========================
   PRODUCT CATALOG
========================= */

function renderProductGroups() {

  const catalog = document.getElementById("productCatalog");

  if (!catalog) return;

  catalog.innerHTML = "";


  // Crystal
  const crystalTitle = document.createElement("h2");
  crystalTitle.className = "section-title";
  crystalTitle.textContent = "Crystal Comfort Scarf";
  catalog.appendChild(crystalTitle);

  const crystalGroup = productGroups.find(group => group.id === "crystal");

  if (crystalGroup) {
    createProductWindow(catalog, crystalGroup);
  }


  // Chiffon
  const chiffonTitle = document.createElement("h2");
  chiffonTitle.className = "section-title";
  chiffonTitle.textContent = "Crepe Chiffon Scarf";
  catalog.appendChild(chiffonTitle);

  productGroups
    .filter(group => group.id.startsWith("chiffon"))
    .forEach(group => {
      createProductWindow(catalog, group);
    });


  // Wrist Cuffs
  const cuffsTitle = document.createElement("h2");
  cuffsTitle.className = "section-title";
  cuffsTitle.textContent = "Wrist Cuffs";
  catalog.appendChild(cuffsTitle);

  const cuffsGroup = productGroups.find(
    group => group.id === "wristCuffs"
  );

  if (cuffsGroup) {
    createProductWindow(catalog, cuffsGroup);
  }
}


/* =========================
   PRODUCT WINDOW
========================= */

function createProductWindow(container, group) {

  const window = document.createElement("div");
  window.className = "product-group";

  const groupWindow = document.createElement("div");
  groupWindow.className = "group-window";

  const track = document.createElement("div");
  track.className = "group-track";


  group.items.forEach((item, index) => {

    const card = document.createElement("div");
    card.className = "catalog-card";

    const key = `${group.id}-${index}`;

    const isWishlisted = wishlist.includes(key);


    if (item.soldOut) {

      const soldOut = document.createElement("div");
      soldOut.className = "sold-out";
      soldOut.textContent = "SOLD OUT";

      card.appendChild(soldOut);
    }


    const heart = document.createElement("button");
    heart.className = "card-heart";
    heart.innerHTML = isWishlisted ? "♥" : "♡";

    heart.onclick = function(event) {
      event.stopPropagation();
      toggleWishlist(group, index);
    };

    card.appendChild(heart);


    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.color;

    card.appendChild(image);


    const color = document.createElement("div");
    color.className = "catalog-color";
    color.textContent = item.color;

    card.appendChild(color);


    const price = document.createElement("div");
    price.className = "catalog-price";
    price.textContent = `${group.price} EGP`;

    card.appendChild(price);


    const button = document.createElement("button");

    if (item.soldOut) {

      button.className = "sold-out-button";
      button.textContent = "SOLD OUT";

    } else {

      button.className = "catalog-button";
      button.textContent = "View";

      button.onclick = function() {
        openProduct(group, index);
      };
    }

    card.appendChild(button);

    track.appendChild(card);
  });


  groupWindow.appendChild(track);
  window.appendChild(groupWindow);
  container.appendChild(window);
}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(group, index) {

  currentGroup = group;
  currentIndex = index;

  const item = group.items[index];

  document.getElementById("modalProductImage").src = item.image;

  document.getElementById("modalProductName").textContent = group.name;

  document.getElementById("modalProductColor").textContent =
    `Color: ${item.color}`;

  document.getElementById("modalProductPrice").textContent =
    `${group.price} EGP`;


  const wishlistButton =
    document.getElementById("modalWishlistButton");

  wishlistButton.textContent =
    wishlist.includes(`${group.id}-${index}`) ? "♥" : "♡";


  wishlistButton.onclick = function() {
    toggleWishlist(group, index);
  };


  const addButton =
    document.getElementById("modalAddButton");

  if (item.soldOut) {

    addButton.textContent = "SOLD OUT";
    addButton.disabled = true;

  } else {

    addButton.textContent = "Add to Cart";
    addButton.disabled = false;

    addButton.onclick = function() {
      addToCart(group, index);
    };
  }


  document.getElementById("productModal")
    .classList.add("active");
}


function closeProduct() {

  document.getElementById("productModal")
    .classList.remove("active");
}


/* =========================
   CART
========================= */

function addToCart(group, index) {

  const item = group.items[index];

  if (item.soldOut) return;


  cart.push({
    key: `${group.id}-${index}`,
    name: group.name,
    color: item.color,
    image: item.image,
    price: group.price
  });


  localStorage.setItem(
    "israaCart",
    JSON.stringify(cart)
  );


  updateCartCount();
  showCartToast(item.color);

  closeProduct();
}


function updateCartCount() {

  const count =
    document.getElementById("cartCount");

  if (count) {
    count.textContent = cart.length;
  }
}


function openCart() {

  renderCart();

  document.getElementById("cartModal")
    .classList.add("active");
}


function closeCart() {

  document.getElementById("cartModal")
    .classList.remove("active");
}


function renderCart() {

  const container =
    document.getElementById("cartItems");

  container.innerHTML = "";


  if (cart.length === 0) {

    container.innerHTML =
      "<p>Your cart is empty.</p>";

    document.getElementById("cartSubtotal").textContent =
      "0 EGP";

    document.getElementById("cartShipping").textContent =
      "0 EGP";

    document.getElementById("cartTotal").textContent =
      "0 EGP";

    return;
  }


  cart.forEach((item, index) => {

    const row = document.createElement("div");
    row.className = "cart-item";


    const image = document.createElement("img");
    image.src = item.image;

    row.appendChild(image);


    const info = document.createElement("div");
    info.className = "cart-item-info";

    info.innerHTML = `
      <strong>${item.name}</strong>
      <span>${item.color}</span>
      <span>${item.price} EGP</span>
    `;

    row.appendChild(info);


    const remove = document.createElement("button");
    remove.textContent = "×";

    remove.onclick = function() {
      cart.splice(index, 1);

      localStorage.setItem(
        "israaCart",
        JSON.stringify(cart)
      );

      updateCartCount();
      renderCart();
    };


    row.appendChild(remove);

    container.appendChild(row);
  });


  const subtotal =
    cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );


  document.getElementById("cartSubtotal").textContent =
    `${subtotal} EGP`;

  document.getElementById("cartShipping").textContent =
    "Select governorate at checkout";

  document.getElementById("cartTotal").textContent =
    `${subtotal} EGP`;
}


/* =========================
   WISHLIST
========================= */

function toggleWishlist(group, index) {

  const key = `${group.id}-${index}`;

  if (wishlist.includes(key)) {

    wishlist = wishlist.filter(
      item => item !== key
    );

  } else {

    wishlist.push(key);
  }


  localStorage.setItem(
    "israaWishlist",
    JSON.stringify(wishlist)
  );


  updateWishlistCount();
  renderProductGroups();


  if (
    currentGroup &&
    currentGroup.id === group.id &&
    currentIndex === index
  ) {
    document.getElementById("modalWishlistButton").textContent =
      wishlist.includes(key) ? "♥" : "♡";
  }


  if (
    document.getElementById("wishlistModal")
      .classList.contains("active")
  ) {
    renderWishlist();
  }
}


function updateWishlistCount() {

  const count =
    document.getElementById("wishlistCount");

  if (count) {
    count.textContent = wishlist.length;
  }
}


function openWishlist() {

  renderWishlist();

  document.getElementById("wishlistModal")
    .classList.add("active");
}


function closeWishlist() {

  document.getElementById("wishlistModal")
    .classList.remove("active");
}


function renderWishlist() {

  const container =
    document.getElementById("wishlistItems");

  container.innerHTML = "";


  let found = false;


  productGroups.forEach(group => {

    group.items.forEach((item, index) => {

      const key = `${group.id}-${index}`;

      if (!wishlist.includes(key)) return;

      found = true;


      const row = document.createElement("div");
      row.className = "wishlist-item";


      const image = document.createElement("img");
      image.src = item.image;

      row.appendChild(image);


      const info = document.createElement("div");

      info.innerHTML = `
        <strong>${group.name}</strong>
        <span>${item.color}</span>
        <span>${group.price} EGP</span>
      `;

      row.appendChild(info);


      const view = document.createElement("button");
      view.textContent = "View";

      view.onclick = function() {
        closeWishlist();
        openProduct(group, index);
      };

      row.appendChild(view);

      container.appendChild(row);
    });
  });


  if (!found) {
    container.innerHTML =
      "<p>Your wishlist is empty.</p>";
  }
}


/* =========================
   CHECKOUT
========================= */

function openCheckout() {

  if (cart.length === 0) {
    return;
  }

  updateCheckoutTotal();

  document.getElementById("checkoutModal")
    .classList.add("active");
}


function closeCheckout() {

  document.getElementById("checkoutModal")
    .classList.remove("active");
}


function updateCheckoutTotal() {

  const subtotal =
    cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );


  const governorate =
    document.getElementById(
      "checkoutGovernorate"
    ).value;


  const shipping =
    shippingRates[governorate] || 0;


  const total =
    subtotal + shipping;


  document.getElementById(
    "checkoutSubtotal"
  ).textContent = `${subtotal} EGP`;


  document.getElementById(
    "checkoutShipping"
  ).textContent =
    governorate
      ? `${shipping} EGP`
      : "Select governorate";


  document.getElementById(
    "checkoutTotal"
  ).textContent =
    `${total} EGP`;
}


/* =========================
   WHATSAPP ORDER
========================= */

function placeOrder() {

  const name =
    document.getElementById("checkoutName").value.trim();

  const phone =
    document.getElementById("checkoutPhone").value.trim();

  const governorate =
    document.getElementById("checkoutGovernorate").value;

  const address =
    document.getElementById("checkoutAddress").value.trim();


  if (
    !name ||
    !phone ||
    !governorate ||
    !address
  ) {

    alert("Please complete all required fields.");

    return;
  }


  const subtotal =
    cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );


  const shipping =
    shippingRates[governorate];


  const total =
    subtotal + shipping;


  let message =
    `Israa Boutique Order%0A%0A`;

  message +=
    `Name: ${name}%0A`;

  message +=
    `Phone: ${phone}%0A`;

  message +=
    `Governorate: ${governorate}%0A`;

  message +=
    `Address: ${address}%0A%0A`;


  message += `Order:%0A`;


  cart.forEach(item => {

    message +=
      `- ${item.name} - ${item.color} - ${item.price} EGP%0A`;
  });


  message += `%0ASubtotal: ${subtotal} EGP%0A`;

  message +=
    `Shipping Fee: ${shipping} EGP%0A`;

  message +=
    `Total: ${total} EGP`;


  window.open(
    `https://wa.me/${whatsapp}?text=${message}`,
    "_blank"
  );
}


/* =========================
   QUIZ
========================= */

function findMyLook() {

  const q1 =
    document.querySelector(
      'input[name="q1"]:checked'
    )?.value;

  const q2 =
    document.querySelector(
      'input[name="q2"]:checked'
    )?.value;

  const q3 =
    document.querySelector(
      'input[name="q3"]:checked'
    )?.value;


  if (!q1 || !q2 || !q3) {

    document.getElementById("quizResult").textContent =
      "Please answer all three questions.";

    return;
  }


  const scores = {};


  productGroups.forEach(group => {

    group.items.forEach(item => {

      if (item.soldOut) return;

      let score = 0;

      const color =
        item.color.toLowerCase();


      if (
        q1 === "neutral" &&
        (
          color.includes("beige") ||
          color.includes("taupe") ||
          color.includes("cream") ||
          color.includes("grey") ||
          color.includes("gray")
        )
      ) score += 2;


      if (
        q1 === "soft" &&
        (
          color.includes("lavender") ||
          color.includes("pink") ||
          color.includes("mint") ||
          color.includes("baby")
        )
      ) score += 2;


      if (
        q1 === "dark" &&
        (
          color.includes("navy") ||
          color.includes("midnight") ||
          color.includes("maroon") ||
          color.includes("aubergine") ||
          color.includes("slate")
        )
      ) score += 2;


      if (
        q1 === "colorful" &&
        (
          color.includes("green") ||
          color.includes("blue") ||
          color.includes("orange") ||
          color.includes("coral") ||
          color.includes("red")
        )
      ) score += 2;


      if (
        q2 === "elegant" &&
        (
          color.includes("lavender") ||
          color.includes("rose") ||
          color.includes("mauve") ||
          color.includes("slate")
        )
      ) score += 2;


      if (
        q2 === "soft" &&
        (
          color.includes("mint") ||
          color.includes("pink") ||
          color.includes("cream") ||
          color.includes("baby")
        )
      ) score += 2;


      if (
        q2 === "classic" &&
        (
          color.includes("beige") ||
          color.includes("taupe") ||
          color.includes("navy") ||
          color.includes("grey")
        )
      ) score += 2;


      if (
        q2 === "bold" &&
        (
          color.includes("red") ||
          color.includes("orange") ||
          color.includes("maroon") ||
          color.includes("petroleum")
        )
      ) score += 2;


      if (
        q3 === "green" &&
        (
          color.includes("green") ||
          color.includes("olive") ||
          color.includes("pistachio") ||
          color.includes("mint")
        )
      ) score += 3;


      if (
        q3 === "blue" &&
        (
          color.includes("blue") ||
          color.includes("navy") ||
          color.includes("petroleum") ||
          color.includes("midnight")
        )
      ) score += 3;


      if (
        q3 === "pink" &&
        (
          color.includes("pink") ||
          color.includes("rose") ||
          color.includes("coral")
        )
      ) score += 3;


      if (
        q3 === "neutral" &&
        (
          color.includes("beige") ||
          color.includes("taupe") ||
          color.includes("cream") ||
          color.includes("grey") ||
          color.includes("gray")
        )
      ) score += 3;


      scores[`${group.id}-${group.items.indexOf(item)}`] = {
        score,
        color: item.color,
        group
      };

    });
  });


  const best =
    Object.values(scores)
      .sort((a, b) => b.score - a.score)[0];


  if (!best) return;


  document.getElementById("quizResult").innerHTML =
    `Your recommended color is <strong>${best.color}</strong>.`;
}


/* =========================
   CART TOAST
========================= */

function showCartToast(color) {

  const toast =
    document.getElementById("cartToast");

  const message =
    document.getElementById("toastMessage");


  message.textContent =
    `${color} added to your cart ♡`;


  toast.classList.add("show");


  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================
   INITIALIZE
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProductGroups();

  updateCartCount();

  updateWishlistCount();

});
