const card = document.querySelector(".card");

let product = [
  {
    price: "599,89₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img1.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "44,50₽",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Колбаса Тоскан...",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img2.png",
    image1: "../assets/images/home-page/5talik-yulduz.svg",
  },
  {
    price: "159,99₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img3.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "49,39₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img4.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "77,99₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec3_img1.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "159,99₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img3.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "599,99₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img1.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
  {
    price: "49,39₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    button: "В корзину",
    image: "../assets/images/home-page/sec2_img4.png",
    image1: "../assets/images/home-page/2talik-yulduz.svg",
  },
];

const cards = document.querySelector(".cards");

function displayProducts(data) {
  let str = "";
  data.forEach((product) => {
    str += `
      <div class="card">
        <img src="${product.image}" alt="${product.title}" class="t-img" />
        <h2 class="card-h2">${product.price}</h2>
        <div class="card-text">
        <h3>${product.title}</h3>
        <img src="${product.image1}" alt="Rating" class="Rating" />
        </div>
        <button>${product.button}</button>
      </div>
    `;
  });
  cards.innerHTML = str;
}

displayProducts(product);
