// MENU HAMBURGER
// const menuMobile = document.getElementById("menu-mobile");
// const navMobile = document.getElementById("nav-mobile");
// const root = document.getElementById("root");

// const Menu = () => {
//   const showMenu = () => {
//     navMobile.classList.toggle(hidden);
//   };

// const closeMenu = () => {
// navMobile.classList.contains("hidden") ? console.log("true") : console.log("false"); 
// }

//   menuMobile.addEventListener("click", showMenu);

//   root.addEventListener("click", closeMenu);
// };

// export default Menu;
const body = document.querySelector("body");
const menuMobile = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-links");
const menuClose = document.getElementById("close");
const header = document.getElementById("header");

const Menu = () => {
  const showMenu = () => {
    navMenu.classList.toggle("hidden");
    header.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
  };
  menuMobile.addEventListener("click", showMenu);
  menuClose.addEventListener("click", showMenu);
};

export default Menu;
