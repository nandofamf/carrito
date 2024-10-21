// Función para agregar una nueva reseña al listado
document.getElementById('enviar-resena').addEventListener('click', function() {
    const contenidoResena = document.getElementById('contenido-resena').value;
    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const estrellasSeleccionadas = document.querySelector('input[name="rating"]:checked');

    if (contenidoResena && nombreUsuario && estrellasSeleccionadas) {
        const valorEstrellas = estrellasSeleccionadas.value;

        // Crear el nuevo elemento de reseña
        const nuevaResena = document.createElement('div');
        nuevaResena.classList.add('reseña');

        // Generar estrellas visuales en base a la calificación seleccionada
        let estrellasHTML = '';
        for (let i = 0; i < valorEstrellas; i++) {
            estrellasHTML += '★';
        }
        for (let i = valorEstrellas; i < 5; i++) {
            estrellasHTML += '☆';
        }

        // Crear la reseña con estrellas y el comentario
        nuevaResena.innerHTML = `<strong>${nombreUsuario}:</strong><div class="estrellas">${estrellasHTML}</div><p>${contenidoResena}</p>`;

        // Agregar la reseña al contenedor de reseñas
        document.getElementById('resenas-lista').appendChild(nuevaResena);

        // Limpiar los campos
        document.getElementById('contenido-resena').value = '';
        document.getElementById('nombre-usuario').value = '';
        document.querySelector('input[name="rating"]:checked').checked = false;
    } else {
        alert('Por favor, completa todos los campos y selecciona una calificación.');
    }
});

// Funcionalidad del carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-item');
const totalImages = images.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * carouselWidth}px)`;
}

// Cambiar las imágenes automáticamente cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);
