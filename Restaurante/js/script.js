const navbar_movile = document.querySelector('.navbar-movile');
const navbar_menu = document.querySelector('.navbar-menu');

navbar_movile.addEventListener('click', () => {
    navbar_menu.classList.toggle('menu-visible-navbar-menu');
});
