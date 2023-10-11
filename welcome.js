const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
