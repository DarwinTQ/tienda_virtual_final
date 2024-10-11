let productos = document.querySelectorAll('.card-img');
productos.forEach((producto) => {
    producto.addEventListener('click', function() {
        console.log(`Producto ${producto.alt} clickeado`);
    });
});
document.querySelector('.hm-logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto
    window.location.href = 'index.html'; // Redirige a la página principal
});
