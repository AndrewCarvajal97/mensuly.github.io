const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "404": "/page/404.html",
    "/": "/page/inicio.html",
    "/trabajaConNosotros": "/page/trabajaConNosotros.html",
    "/contactanos": "/page/contactanos.html"
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes["404"];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("contenedor").innerHTML = html;

    // Inicializar componentes de Materialize
    M.AutoInit();

    // Verificar si estamos en la página de inicio y cargar el script de inicialización
    if (path === '/' || path === '/page/inicio.html') {
        const script = document.createElement('script');
        script.src = '../js/inicio.js'; // Asegúrate de que la ruta sea correcta
        script.onload = () => {
            // Inicializar carruseles después de cargar el script
            initializeCarousels();
        };
        document.body.appendChild(script);
    }
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

// Función para inicializar los carruseles
function initializeCarousels() {
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
}
