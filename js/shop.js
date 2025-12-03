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


