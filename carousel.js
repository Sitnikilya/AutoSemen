let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

setInterval(() => {
    moveSlide(1);
}, 5000);

showSlide(currentSlide);

document.querySelector(".carousel-button.prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".carousel-button.next").addEventListener("click", () => moveSlide(1));
