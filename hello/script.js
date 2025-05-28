// Select the menu button and nav-links container
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle menu when clicking the button
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
