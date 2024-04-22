const navHeader = document.getElementById("header-nav")
const divMenu = document.getElementById("div-menu")
const btn = document.getElementById("btn")
const burgerLogo = document.getElementById("burger")
const closeLogo = document.getElementById("close")

btn.addEventListener("click", function(){
   burgerLogo.classList.toggle("notShow")
   closeLogo.classList.toggle("notShow")
   navHeader.classList.toggle("nav-menu-open")
   divMenu.classList.toggle("div-ul-menu")
   divMenu.classList.toggle("notShow")
})