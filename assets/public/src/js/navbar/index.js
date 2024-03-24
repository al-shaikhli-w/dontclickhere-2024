const burgermenu = document.querySelector('.burgermenu');
const menuHeader = document.querySelector('#menu-header');
const header = document.querySelector('.header');
const firstAnchorsLink = document.querySelectorAll('.header-menu #menu-header>li a');
//console.log(firstAnchorsLink);
window.addEventListener("DOMContentLoaded", () => {
    burgermenu.addEventListener('click', menuhandler);
});

const menuhandler = () => {
    burgermenu.classList.toggle('opened');
    menuHeader.classList.toggle('opened');
    header.classList.toggle('opened');
}
