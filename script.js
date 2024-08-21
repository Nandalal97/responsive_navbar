// search-box open close js code
let navbar = document.querySelector(".gf-navbar");
// sidebar open close js code
let navLinks = document.querySelector(".gf-nav-links");
let menuOpenBtn = document.querySelector(".gf-navbar .bx-menu");
let menuCloseBtn = document.querySelector(".gf-nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".gf-sub-menu-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
