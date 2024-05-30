// const image = document.querySelector("img");
let product = [
  {
    Image: "../assets/images/categories/categories-image1.png",
    class: "katta_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image2.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image3.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image4.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image5.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image6.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image7.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image8.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image9.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image10.png",
    class: "katta_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image11.png",
    class: "kichik_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image12.png",
    class: "katta_rasm",
  },
  {
    Image: "../assets/images/categories/categories-image13.png",
    class: "kichik_rasm",
  },
];

const categories_images = document.querySelector(".categories_images");

function displayProducts(data) {
  let str = "";
  data.forEach((product) => {
    str += `
          <img src=${product.Image} alt="image" class="${product.class}"/>
        `;
  });

  categories_images.innerHTML = str;
}

displayProducts(product);
