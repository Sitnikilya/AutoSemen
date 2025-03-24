let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

// Функция для отображения текущего слайда
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Функция для перехода к следующему или предыдущему слайду
function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Автоматическое переключение слайдов каждые 5 секунд
let slideInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Остановка автоматического переключения при наведении на карусель
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

// Возобновление автоматического переключения при уходе курсора
carouselContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
});

// Показ первого слайда при загрузке страницы
showSlide(currentSlide);

// Обработчики для кнопок "вперед" и "назад"
document.querySelector(".carousel-button.prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".carousel-button.next").addEventListener("click", () => moveSlide(1));