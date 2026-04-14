let products = [
  { name: "Lollipop", price: 2 },
  { name: "Chocolate Bar", price: 3 },
  { name: "Gummy Bears", price: 4 }
];

let cart = [];
let user = { name: "Guest", credits: 0 };

function renderProducts() {
  let container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((p, index) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>$${p.price}</p>
      <button onclick="addToCart(${index})">Add</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cart-count").innerText = cart.length;
}

function checkout() {
  if (cart.length === 0) return alert("Cart is empty!");

  let earnedCredits = cart.length;
  user.credits += earnedCredits;

  alert(`You bought ${cart.length} items! Earned ${earnedCredits} credits!`);

  cart = [];
  updateUI();
}

function login() {
  let name = document.getElementById("nameInput").value;
  if (name) {
    user.name = name;
    updateUI();
  }
}

function updateUI() {
  document.getElementById("username").innerText = user.name;
  document.getElementById("credits").innerText = user.credits;
  document.getElementById("accountCredits").innerText = user.credits;
  document.getElementById("cart-count").innerText = cart.length;
}

function addCandy() {
  let name = document.getElementById("newCandy").value;
  let price = document.getElementById("newPrice").value;

  if (!name || !price) return;

  products.push({ name, price });
  renderProducts();
}

function changeBackground(color) {
  document.body.style.background = color;
}

function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

renderProducts();
updateUI();
