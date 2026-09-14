let currentSlide = 0;

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function nextSlide() {

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}