const miElemento = document.getElementById('navbar');
let scrollAnterior = 0;

window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY; // Moderno y recomendado

    if (scrollActual > scrollAnterior) {
        miElemento.classList.add('activo');
    } else {
        miElemento.classList.remove('activo');
    }

    scrollAnterior = scrollActual <= 0 ? 0 : scrollActual;
});
