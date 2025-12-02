
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
        oldPrice: "$229.00",
        sale: "13% OFF"
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
    {
        img: "./images/image 8.png",
        name: "Aluminum Plant",
        price: "$179.00"
    },
     {
        img: "./images/image 9.png",
        name: "Bird's Nest Fern",
        price: "$99.00"
    },
     {
        img: "./images/image 99.png",
        name: "Broadleaf Lady Palm",
        price: "$59.00"
    },
     {
        img: "./images/image 10.png",
        name: "Chinese Evergreen",
        price: "$39.00"
    },
];

const cardBox = document.querySelector(".product-box");

function renderProducts() {
    let result = "";

    products.forEach(item => {
        result += `
        <div class="card">
            <div class="card-img-box">
                ${item.sale ? `<div class="sale">${item.sale}</div>` : ""}

                <img src="${item.img}" class="card-img">

                <div class="card-icons">
                    <i class="icon">🛒</i>
                    <i class="icon">❤️</i>
                    <i class="icon">🔍</i>
                </div>
            </div>

            <h3 class="card-title">${item.name}</h3>
            <p class="card-price">
                <span class="new">${item.price}</span>
                ${item.oldPrice ? `<span class="old">${item.oldPrice}</span>` : ""}
            </p>
        </div>`;
    });

    cardBox.innerHTML = result;
}

renderProducts();
