function copyMenu() {
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

const submenu = document.querySelectorAll(".has-child");
submenu.forEach((currentMenu) => {
  currentMenu.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.forEach((otherMenu) =>
      otherMenu !== currentMenu ? otherMenu.classList.remove("expand") : null
    );

    if (currentMenu) {
      currentMenu.classList.toggle("expand");
    }
  });
});

const menuBtn = document.querySelector(".trigger");
const closeBtn = document.querySelector(".t-close");
const bar = document.querySelector(".site-off");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bar.classList.toggle("showmenu");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bar.classList.remove("showmenu");
});

const language = document.querySelector(".language");
const currency = document.querySelector(".currency");
language.addEventListener("click", (e) => {
  e.preventDefault();
  language.classList.toggle("expand");
});
currency.addEventListener("click", (e) => {
  e.preventDefault();
  currency.classList.toggle("expand");
});
