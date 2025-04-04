const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Démarre le carrousel
setInterval(nextSlide, 5000); // Change d'image toutes les 5 secondes

// Affiche la première image au chargement
showSlide(currentSlide);