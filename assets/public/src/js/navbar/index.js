const burgermenu = document.querySelector('.burgermenu');
const menuHeader = document.querySelector('#menu-header');

burgermenu.addEventListener('click', () => {
    burgermenu.classList.toggle('opened');
    menuHeader.classList.toggle('opened');
});