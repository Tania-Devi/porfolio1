// ==========================================
// TANIA DEVI PORTFOLIO - JAVASCRIPT
// ==========================================


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}


// CLOSE MENU AFTER CLICKING LINK
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });
});


// NAVBAR EFFECT WHEN SCROLLING
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 8px 30px rgba(80, 50, 90, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".about-visual, " +
    ".project-card, " +
    ".skill-category, " +
    ".timeline-item, " +
    ".certification-card, " +
    ".languages-list span, " +
    ".contact-box"
);


const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(element);
});


// PROJECT CARD HOVER EFFECT
const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        card.style.transform =
            "perspective(900px) " +
            "rotateX(" + rotateX + "deg) " +
            "rotateY(" + rotateY + "deg) " +
            "translateY(-8px)";
    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(900px) " +
            "rotateX(0deg) " +
            "rotateY(0deg)";
    });
});


// HERO MOUSE MOVEMENT
const heroVisual =
    document.querySelector(".hero-visual");

const heroCircle =
    document.querySelector(".hero-circle");

if (heroVisual && heroCircle) {

    heroVisual.addEventListener("mousemove", function (event) {

        const rect =
            heroVisual.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const moveX =
            (x - rect.width / 2) / 35;

        const moveY =
            (y - rect.height / 2) / 35;

        heroCircle.style.transform =
            "translate(" + moveX + "px, " + moveY + "px)";
    });


    heroVisual.addEventListener("mouseleave", function () {

        heroCircle.style.transform =
            "translate(0, 0)";
    });
}


// FLOATING FLOWER PETALS
const flowers = ["✿", "❀", "✽", "❁"];

function createPetal() {

    const petal =
        document.createElement("span");

    petal.className = "floating-petal";

    const randomFlower =
        Math.floor(Math.random() * flowers.length);

    petal.innerText =
        flowers[randomFlower];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        12 + Math.random() * 15 + "px";

    petal.style.animationDuration =
        8 + Math.random() * 7 + "s";

    document.body.appendChild(petal);


    setTimeout(function () {
        petal.remove();
    }, 16000);
}


// CREATE PETAL EVERY 2.5 SECONDS
setInterval(createPetal, 2500);


// ADD PETAL ANIMATION CSS
const petalCSS =
    document.createElement("style");

petalCSS.innerHTML =
    ".floating-petal {" +
    "position: fixed;" +
    "top: -30px;" +
    "z-index: 999;" +
    "pointer-events: none;" +
    "color: rgba(155,107,179,0.35);" +
    "animation: petalFall linear forwards;" +
    "}" +

    "@keyframes petalFall {" +

    "0% {" +
    "transform: translateY(-30px) rotate(0deg);" +
    "opacity: 0;" +
    "}" +

    "10% {" +
    "opacity: 1;" +
    "}" +

    "50% {" +
    "transform: translateY(50vh) translateX(40px) rotate(180deg);" +
    "}" +

    "100% {" +
    "transform: translateY(110vh) translateX(-40px) rotate(360deg);" +
    "opacity: 0;" +
    "}" +

    "}";

document.head.appendChild(petalCSS);


// PAGE LOAD
window.addEventListener("load", function () {

    if (navbar) {
        navbar.style.boxShadow = "none";
    }

    window.scrollTo(0, 0);
});