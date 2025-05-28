const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Scroll with buttons
    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth * 0.8, // Scroll 80% of the container width
            behavior: 'smooth'
        });
    });

    backBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth * 0.8,
            behavior: 'smooth'
        });
    });

    // Optional: Enable horizontal scrolling with Shift + mouse wheel
    scrollContainer.addEventListener("wheel", (evt) => {
        if (evt.shiftKey) {
            evt.preventDefault();
            scrollContainer.scrollBy({
                left: evt.deltaY,
                behavior: 'smooth'
            });
        }
    });
});
