const menu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
    navList.classList.toggle("active");
});




// ================================
// CSC SEVA KENDRA MAIN JAVASCRIPT
// ================================


// MOBILE MENU TOGGLE
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            navList.classList.toggle("active");

        });

    }

});


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});



// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".service-card, .scheme-card, .extra-card"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    let windowHeight = window.innerHeight;

    revealElements.forEach(function (el) {

        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {

            el.classList.add("revealed");

        }

    });

}



// ================================
// HERO IMAGE FLOAT PAUSE ON HOVER
// ================================

const heroImages = document.querySelectorAll(
    ".hero-image img, .schemes-hero-image img, .services-hero-image img"
);

heroImages.forEach(function (img) {

    img.addEventListener("mouseenter", function () {
        img.style.animationPlayState = "paused";
    });

    img.addEventListener("mouseleave", function () {
        img.style.animationPlayState = "running";
    });

});



// ================================
// SIMPLE SEARCH FILTER (SCHEMES)
// ================================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".scheme-card");

        cards.forEach(function (card) {

            let text = card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }

        });

    });

}
