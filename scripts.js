
window.document.addEventListener('click', () => {
    let boxMoreInfo = document.querySelectorAll('.box-more-info');

    if (boxMoreInfo) {
        Array.from(boxMoreInfo).forEach((ele) => {
            ele.addEventListener('click', (e) => toggleDescription(e, ele));
        });
    }
});
