let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    // Скрываем все слайды
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;

    // Проверяем границы слайдов
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Показываем текущий слайд
    showSlide(currentSlide);
}

// Автоматическая прокрутка каждые 5 секунд
setInterval(() => {
    moveSlide(1);
}, 5000);

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);
