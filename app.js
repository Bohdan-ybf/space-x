let mobileMenu = document.querySelector(".nav__mobile__menu");
let mainMenu = document.querySelector(".header__nav");

console.log(mobileMenu);
console.log(mainMenu);

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

let bodyMenu = document.querySelector(".nav__mobile__menu");
let bodyTag = document.querySelector("body");

console.log(bodyMenu);
console.log(bodyTag);

bodyMenu.addEventListener("click", function () {
  bodyMenu.classList.toggle("active-body");
  if (bodyMenu.classList.contains("active-body")) {
    bodyTag.classList.add("active-body");
  } else {
    bodyTag.classList.remove("active-body");
  }
});
