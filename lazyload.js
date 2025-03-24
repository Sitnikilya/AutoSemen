document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".lazyload");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove("lazyload");
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            observer.observe(img);
        });
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});