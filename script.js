// ==============================
// RADHA MADHAV ROADLINES
// Premium JavaScript
// ==============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#002b5c";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,40,85,.95)";
        header.style.boxShadow = "none";

    }

});

// Counter Animation
const counters = document.querySelectorAll(".box h2");

const speed = 80;

const runCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        if (text.includes("PAN")) return;

        const target = parseInt(text.replace("+",""));

        let count = 0;

        const update = () => {

            count += Math.ceil(target / speed);

            if (count >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            }

        };

        update();

    });

};

// Run Counter Once
let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const top = counterSection.offsetTop - 500;

    if (window.scrollY > top && !started) {

        runCounter();

        started = true;

    }

});

// Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".service-card,.fleet-card,.gallery img,.box,.clients img,.contact-form"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s";

    observer.observe(item);

});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Current Year
const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
    `© ${new Date().getFullYear()} RADHA MADHAV ROADLINES. All Rights Reserved.`;

}
