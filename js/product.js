const indicators = document.querySelector(".images");
const showImg = document.querySelector("#show img");
indicators.addEventListener("click", (e) => {
  let imgUrl = e.target.src;
  imgUrl && (showImg.src = imgUrl);
});
