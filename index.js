const navButton = document.querySelector("#nav-btn");
const navItems = document.querySelector(".nav-items");
const navContainer = document.querySelector(".nav-container");
navButton.addEventListener("click", function () {
  navItems.classList.toggle("showNav");
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navContainer.classList.add("fixed-navbar");
  } else {
    navContainer.classList.remove("fixed-navbar");
  }
});
