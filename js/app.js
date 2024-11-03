const btnMobile = document.querySelector('#boton-mobile')
const btnMenu = document.querySelector('#menu-mobile')
const menuConSub = document.querySelectorAll('.menu-con-sub')
const subM = document.querySelectorAll('.submenu')

btnMobile.addEventListener('click', () => {
    btnMenu.classList.toggle('hidden')
})

// Agregamos un listener a cada elemento del menú que tiene submenús
menuConSub.forEach((menu, index) => {
    menu.addEventListener('mouseenter', () => {
        // Mostramos/ocultamos el submenú correspondiente
        subM[index].classList.toggle('hidden'); // Usamos el índice para afectar al submenú correcto
    });
});



const btnDesktop = document.querySelectorAll('.boton-desktop')
const subDesktop = document.querySelectorAll('.submenu-desktop')

btnDesktop.forEach((menu, index) => {
    menu.addEventListener('mouseenter', () => {
        subDesktop[index].classList.toggle('hidden');
    });
});