;(function() {
  let openBurgerMenu = document.querySelector(".hamburger");
  let burgerMenu = document.querySelector(".burger-menu");
  let closeBurgerMenu = document.querySelector(".burger-menu__close");
  let burgerMenuLink = document.querySelectorAll(".burger-menu__link");
  let body = document.querySelector('.body');
  let section = document.querySelector("section");


  openBurgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.add("burger-menu-active");
    body.classList.add("body_closed");
    section.classList.remove("active");
  });
  
  burgerMenuLink.forEach(item => {
    item.addEventListener("click", (e) => {
      burgerMenuLink.forEach(link => {
        link.classList.remove("burger-link-active");
      });
  
      item.classList.add("burger-link-active")
      if (item.classList.contains("burger-link-active")) {
        burgerMenu.classList.remove("burger-menu-active");
      }
    });
  });
  
  closeBurgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.remove("burger-menu-active");
    body.classList.remove("body_closed");
    section.classList.add("active");
  });
})();