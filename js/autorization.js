const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});

modal.addEventListener("click", function (e) {
  modal.classList.remove("open");
});
