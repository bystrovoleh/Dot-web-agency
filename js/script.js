//Mobile modal
const menuButton = document.querySelector('.nav-menu')
const menuClose = document.querySelector('.navigation__close')
const headerNav = document.querySelector('.navigation')


menuButton.onclick = () => {
    headerNav.classList.toggle('navigation--mobile')
}

menuClose.onclick = () => {
    headerNav.classList.remove('navigation--mobile');
}


document.addEventListener("DOMContentLoaded", function () {
    //Home
    const openModalBtn = document.querySelector('.hero .btn');
    const openModalBtn2 = document.querySelector('.interface .btn');
    const openModalBtn3 = document.querySelector('.talk .btn--quote');
    const openModalBtn4 = document.querySelector('.contact .btn');
    //About
    const openModalBtn5 = document.querySelector('.build .btn--quote');
    const openModalBtn6 = document.querySelector('.agency .btn--quote');
    const openModalBtn7 = document.querySelector('.contact .btn');
    //Services
    const openModalBtn8 = document.querySelector('.talk .btn--quote');
    const openModalBtn9 = document.querySelector('.contact .btn');

    const submitModalBtn = document.querySelector('.modal .btn');
    const closeModalBtn = document.querySelector('.modal .close');
    const closeFormBtn = document.querySelector('.submit__form .close');
    const mainModal = document.querySelector('.modal');
    const formModal = document.querySelector('.submit__form');

    function openModal() {
        if (mainModal) {
            mainModal.classList.toggle('modal--mobile');
        }
    }

    if (openModalBtn) openModalBtn.onclick = openModal;
    if (openModalBtn2) openModalBtn2.onclick = openModal;
    if (openModalBtn3) openModalBtn3.onclick = openModal;
    if (openModalBtn4) openModalBtn4.onclick = openModal;
    if (openModalBtn5) openModalBtn5.onclick = openModal;
    if (openModalBtn6) openModalBtn6.onclick = openModal;
    if (openModalBtn7) openModalBtn7.onclick = openModal;
    if (openModalBtn8) openModalBtn8.onclick = openModal;
    if (openModalBtn9) openModalBtn9.onclick = openModal;

    if (closeModalBtn) {
        closeModalBtn.onclick = function () {
            mainModal.classList.remove('modal--mobile');
        };
    }

    if (submitModalBtn) {
        submitModalBtn.onclick = function () {
            if (mainModal) mainModal.classList.remove('modal--mobile');
            if (formModal) formModal.classList.toggle('submit__form--submited');
        };
    }

    if (closeFormBtn) {
        closeFormBtn.onclick = function () {
            if (formModal) formModal.classList.remove('submit__form--submited');
        };
    }
});