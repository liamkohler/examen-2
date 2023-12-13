var burger = document.querySelector(".burger");

var menu = document.querySelector(".menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
