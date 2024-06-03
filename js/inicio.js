document.addEventListener('DOMContentLoaded', function() {
        // Inicializar Carrusel
        let elementos_carrusel = document.querySelectorAll('#carruselId');
        let opciones_carrusel = {
            duration: 200,
            fullWidth: true,
            indicators: true,
            duration: 200
        };
        let carruselInstances = M.Carousel.init(elementos_carrusel, opciones_carrusel);
        // Configurar auto deslizamiento del carrusel
        setInterval(function() {
            let activeCarousel = document.querySelector('#carruselId');
            let instance = M.Carousel.getInstance(activeCarousel);
            instance.next();
        }, 7000); // Cambia las diapositivas cada 2 segundos
    
        // Inicializar Carrusel Automático
        let elementos_carrusel_auto = document.querySelectorAll('#carruselAutoId');
        let opciones_carrusel_auto = {
            duration: 200,
            fullWidth: true,
            indicators: false,
            duration: 10000
        };
        let carrusel_autoInstance=M.Carousel.init(elementos_carrusel_auto, opciones_carrusel_auto);
    
        // Configurar auto deslizamiento del carrusel
        setInterval(function() {
            let activeCarousel = document.querySelector('#carruselAutoId');
            let instance = M.Carousel.getInstance(activeCarousel);
            instance.next();
        }, 500); // Cambia las diapositivas cada 2 segundos>
    
});
