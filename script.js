document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Maneja el clic en el botón de menú
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' en el menú de navegación
        // Esta clase es la que CSS usa para mostrar/ocultar el menú en móvil
        navMenu.classList.toggle('active');
    });

    // Cierra el menú cuando se hace clic en un enlace (en móvil)
    document.querySelectorAll('#nav-menu a').forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});