const menuButton = document.querySelector('.nav-menu')
const menuClose = document.querySelector('.navigation__close')
const headerNav = document.querySelector('.navigation')


menuButton.onclick = () => {
    headerNav.classList.toggle('navigation--mobile')
}

menuClose.onclick = () => {
    headerNav.classList.remove('navigation--mobile');
}