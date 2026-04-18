let cart = [];

async function loadProducts() {
    const res = await fetch("/products");
    const products = await res.json();

    const container = document.getElementById("products");

    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="${p.image}" width="150">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}

async function checkout() {
    const res = await fetch("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart)
    });

    const data = await res.json();
    alert(data.message);
    cart = [];
    renderCart();
}

loadProducts();
