
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


const find = [
    {
        img: "./images/image 14.png",
        name: "SUMMER CACTUS & SUCCULENTS",
        firstname: "We are an online plant shop offering a wide range of cheap and trendy plants",
        btn: "Find More"
    },
    {
        img: "./images/image 15.png",
        name: "STYLING TRENDS & MUCH MORE",
        firstname: "We are an online plant shop offering a wide range of cheap and trendy plants",
        btn: "Find More"
    },
];

const pageBox = document.querySelector(".find-box");

function renderfind() {
    let result = "";

    find.forEach(item => {
        result += `
        <div class="page">
            
            <div class="page-img-box">
                <img src="${item.img}" class="page-img">
            </div>

            <div class="page-content">
                <h3 class="page-title">${item.name}</h3>
                <p class="page-price">
                    <span class="new">${item.firstname}</span>
                </p>
                <button class="page-btn">${item.btn}</button>
            </div>

        </div>`;
    });

    pageBox.innerHTML = result;
}

renderfind();

const blog = [
    {
          img: "./images/01 (1).png",
        data:"September 12  I Read in 6 minutes",
        name:"Cactus & Succulent Care Tips",
        firstname:"Cacti are succulents are easy care plants for any home or patio. ",
         link:"Read More"
    },
     {
          img: "./images/02 (1).png",
        data:"September 12  I Read in 6 minutes",
        name:"Cactus & Succulent Care Tips",
        firstname:"Cacti are succulents are easy care plants for any home or patio. ",
         link:"Read More"
    },
     {
          img: "./images/03 (1).png",
        data:"September 12  I Read in 6 minutes",
        name:"Cactus & Succulent Care Tips",
        firstname:"Cacti are succulents are easy care plants for any home or patio. ",
         link:"Read More"
    },
     {
          img: "./images/04.png",
        data:"September 12  I Read in 6 minutes",
        name:"Cactus & Succulent Care Tips",
        firstname:"Cacti are succulents are easy care plants for any home or patio. ",
         link:"Read More"
    },
];


const blogBox = document.querySelector(".blog-box");

function renderblog() {
    let result = "";

    blog.forEach(item => {
        result += `
        <div class="blog">
            <div class="blog-img-box">
                <img src="${item.img}" class="blog-img">
            </div>
             <h1 class="blog-title1">${item.data}</h1>
            <h3 class="blog-title">${item.name}</h3>
            <p class="blog-price">
                <span class="new">${item.firstname}</span>
            </p>
            <a class="blog-link" href="https://www.youtube.com/watch?v=JRc6oLNzzy8">${item.link}</a>
        </div>`;
    });

    blogBox.innerHTML = result;
}

renderblog();






