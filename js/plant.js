const link =[
           {
              img: "./images/image 44.png",
              title: "Garden Care",
              text: "We are an online plant shop offering a wide range of cheap and trendy plants."
           },
            {
              img: "./images/Group 18.png",
              title: "Garden Care",
              text: "We are an online plant shop offering a wide range of cheap and trendy plants."
           },
            {
              img: "./images/Group 19.png",
              title: "Garden Care",
              text: "We are an online plant shop offering a wide range of cheap and trendy plants."
           },
];





const  linkBox = document.querySelector(".link-box");

function renderlink() {
    let result = "";

     link.forEach(item => {
        result += `
        <div class=" link">
            <div class=" link-img-box">
                <img src="${item.img}" class=" link-img">
            </div>
            <h3 class=" link-title">${item.title}</h3>
            <p class=" link-price">
                <span class="new">${item.text}</span>
            </p>

        </div>`;
    });

     linkBox.innerHTML = result;
}

renderlink();


const products = [
    {
        img: "./images/image 1.png",
        name: "Barberton Daisy",
        price: "$119.00"
    },
    {
        img: "./images/image 100.png",
        name: "Angel Wing Begonia",
        price: "$169.00"
    },
    {
        img: "./images/image 2.png",
        name: "African Violet",
        price: "$199.00",
        
    },
    {
        img: "./images/01 3.png",
        name: "Beach Spider Lily",
        price: "$129.00"
    },
    {
        img: "./images/image 7.png",
        name: "Blushing Bromeliad",
        price: "$139.00"
    },
];

const cardBox = document.querySelector(".product-box");

function renderProducts() {
    let result = "";

    products.forEach(item => {
        result += `
        <div class="card">
            <div class="card-img-box">

                <img src="${item.img}" class="card-img">

            </div>

            <h3 class="card-title">${item.name}</h3>
            <p class="card-price">
                <span class="new">${item.price}</span>
            </p>
            
        </div>`;
    });

    cardBox.innerHTML = result;
}

renderProducts();























const cartData = [
    {
        name: "Barberton Daisy",
        sku: "1995751877966",
        price: 119,
        qty: 2,
        img: "./images/image 11.png"
    },
    {
        name: "Blushing Bromeliad",
        sku: "1995751877065",
        price: 139,
        qty: 6,
        img: "./images/image 15 (1).png"
    },
    {
        name: "Aluminum Plant",
        sku: "1995751877786",
        price: 179,
        qty: 9,
        img: "./images/image 16.png"
    }
];

const cartBody = document.getElementById("cart-body");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

// Render function
function renderCart() {
    cartBody.innerHTML = "";

    cartData.forEach((item, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="prod-info">
                <img src="${item.img}">
                <div>
                    <h3>${item.name}</h3>
                    <span>SKU: ${item.sku}</span>
                </div>
            </td>

            <td>$${item.price.toFixed(2)}</td>

            <td>
                <div class="qty">
                    <button class="minus" data-index="${i}">-</button>
                    <span>${item.qty}</span>
                    <button class="plus" data-index="${i}">+</button>
                </div>
            </td>

            <td class="green">$${(item.price * item.qty).toFixed(2)}</td>

            <td><i class="fas fa-trash delete" data-index="${i}"></i></td>
        `;

        cartBody.appendChild(tr);
    });

    updateTotals();
}

// Update totals
function updateTotals() {
    let subtotal = 0;

    cartData.forEach(item => {
        subtotal += item.price * item.qty;
    });

    subtotalEl.innerText = "$" + subtotal.toFixed(2);
    totalEl.innerText = "$" + (subtotal + 16).toFixed(2);
}

// Buttons (+ / - / delete)
document.addEventListener("click", e => {
    if (e.target.classList.contains("plus")) {
        let i = e.target.dataset.index;
        cartData[i].qty++;
        renderCart();
    }

    if (e.target.classList.contains("minus")) {
        let i = e.target.dataset.index;
        if (cartData[i].qty > 1) {
            cartData[i].qty--;
        }
        renderCart();
    }

    if (e.target.classList.contains("delete")) {
        let i = e.target.dataset.index;
        cartData.splice(i, 1);
        renderCart();
    }
});

// Start
renderCart();