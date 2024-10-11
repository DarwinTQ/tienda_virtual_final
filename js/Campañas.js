document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de campañas cargada.");
    // Puedes agregar interactividad para las campañas aquí
});
document.querySelector('.hm-logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto
    window.location.href = 'index.html'; // Redirige a la página principal
});
