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
