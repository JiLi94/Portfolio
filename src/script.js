const menu = document.querySelector(".navbar-menu");
const hamburger = document.querySelector(".hamburger");
function myFunction() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
hamburger.addEventListener("click", myFunction);