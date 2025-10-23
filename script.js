
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    let slideInterval;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    //
    window.plusSlides = function(n) {
        clearInterval(slideInterval);
        showSlides(slideIndex += n);
        startAutoSlide();
    };

    window.currentSlide = function(n) {
        clearInterval(slideInterval);
        showSlides(slideIndex = n);
        startAutoSlide();
    };

    function showSlides(n) {
        if (!slides || slides.length === 0) return;
        
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        
        // Pour Masquer toutes les slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        // Pour Retirer la classe active de tous les dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        
        // Afficher la slide active et activer le dot correspondant
        slides[slideIndex - 1].style.display = 'block';
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += ' active';
        }
    }

    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            plusSlides(1);
        }, 2000); 
    }

    // Initialiser le slider
    showSlides(slideIndex);
    startAutoSlide();

    // Pause auto-slide quand la souris est sur le slider
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
});

(function ensurePartnersLoop() {
    document.addEventListener('DOMContentLoaded', function () {
        const track = document.querySelector('.partners-track');
        if (!track) return;
        //
        if (track.dataset.duplicated === 'true') return;
        // 
        track.innerHTML += track.innerHTML;
        track.dataset.duplicated = 'true';
    });
})();
