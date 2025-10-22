const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// toggle mobile menu on menu button click
menuBtn.addEventListener("click",() => {
    header.classList.toggle("show-mobile-menu");
});

// close mobile menu on close button click
closeMenuBtn.addEventListener("click",() => {
    menuBtn.click();
});

// fade animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(el => observer.observe(el));
