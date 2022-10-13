
/**
 * Muestra u oculta la descripción de la red social al pulsar el botón de "Más Información"
 */
function toggleDescription(e, ele) {
    e.preventDefault();
    
    let moreInfo = ele.querySelector('.more-info');

    console.log(moreInfo, moreInfo.classList.contains('hidden'));

    moreInfo.classList.contains('hidden') ? moreInfo.classList.remove('hidden') : moreInfo.classList.add('hidden');
}