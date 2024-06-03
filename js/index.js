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

    
});
