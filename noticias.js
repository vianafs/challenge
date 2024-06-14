let currentSlide = 0;

function showSlide(index) {
    const imageSlides = document.querySelectorAll('.carousel-item');
    const textSlides = document.querySelectorAll('.text-carousel-item');
    const totalSlides = imageSlides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    const newTransform = -currentSlide * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;
    document.querySelector('.text-carousel-inner').style.transform = `translateX(${newTransform})`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
