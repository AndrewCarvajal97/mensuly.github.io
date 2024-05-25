document.addEventListener('DOMContentLoaded', function() {
    // Inicializar FloatingActionButton
    let elementos_btn_flotante = document.querySelectorAll('.fixed-action-btn');
    let opciones_btn_flotante = {
        direction: 'top',
        hoverEnabled: true,
    };
    
    M.FloatingActionButton.init(elementos_btn_flotante, opciones_btn_flotante);

    // Inicializar Sidenav
    let elementos_sidenav = document.querySelectorAll('.sidenav');
    let sidenavInstance=M.Sidenav.init(elementos_sidenav);

    // Inicializar Dropdown
    let elementos_desplegable = document.querySelectorAll('.dropdown-trigger');
    let opciones_desplegable = {
        hover: false,
        coverTrigger: false,
        constrainWidth:false,
    };
    let dropdownInstances = M.Dropdown.init(elementos_desplegable, opciones_desplegable);

    

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
    }, 2000); // Cambia las diapositivas cada 2 segundos
    
});
