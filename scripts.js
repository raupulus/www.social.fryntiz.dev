
window.document.addEventListener('click', () => {

    // Mostrar/ocultar descripción de cada red social.

    let boxMoreInfo = document.querySelectorAll('.box-more-info');

    if (boxMoreInfo) {
        Array.from(boxMoreInfo).forEach((ele) => {
            ele.addEventListener('click', (e) => toggleDescription(e, ele));
        });
    }

    // Mostrar/ocultar menú de navegación.
    let btnMenu = document.getElementById('btn-menu');

    if (btnMenu) {
        btnMenu.addEventListener('click', toggleMenu);
    }


    // Subir al principio de la página.
    let btnsGoTop = document.querySelectorAll('.btn-go-top');

    if (btnsGoTop) {
        Array.from(btnsGoTop).forEach((ele) => {
            ele.addEventListener('click', () => goToTop());
        });
    }
});
