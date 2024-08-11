const miElemento = document.getElementById('navbar');
let scrollAnterior = 0;

window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY;
    if (scrollActual > scrollAnterior) {
        miElemento.classList.add('activo');
    } else if (scrollActual === 0) {
        miElemento.classList.remove('activo');
    }
    scrollAnterior = scrollActual;
});
