document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && correo && mensaje) {
        alert('Mensaje enviado correctamente.');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
document.querySelector('.hm-logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto
    window.location.href = 'index.html'; // Redirige a la página principal
});
