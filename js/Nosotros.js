document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de nosotros cargada.");
    // Agrega funcionalidad específica aquí si es necesario
});
document.querySelector('.hm-logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto
    window.location.href = 'index.html'; // Redirige a la página principal
});
