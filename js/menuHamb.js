const headerContent = document.querySelector('#header');
const menuHamb = document.querySelector('.header_menuHamb');

let exibir = true;

function openMenu() {
    headerContent.classList.toggle('on', exibir);
    exibir = !exibir;
}

menuHamb.addEventListener('click', () => openMenu());