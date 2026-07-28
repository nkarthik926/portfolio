document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Mobile Navigation
    // ===============================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===============================
    // Typing Effect
    // ===============================

    const roles = [
        "Software Developer",
        "AI Enthusiast",
        "Cloud Learner",
        "Full Stack Developer",
        "Java Programmer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typing = document.getElementById("typing");

    function typeEffect() {

        if (!typing) return;

        const current = roles[roleIndex];

        if (!deleting) {
            typing.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typing.textContent = current.substring(0, charIndex--);
            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    if (typing) {
        typeEffect();
    }

    // ===============================
    // Scroll To Top Button
    // ===============================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

    // ===============================
    // Active Navigation
    // ===============================

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    if (sections.length && navItems.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) {
                    current = section.getAttribute("id");
                }
            });

            navItems.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });

        });

    }

    // ===============================
    // Reveal Animation
    // ===============================

    const revealTargets = document.querySelectorAll(".section");

    if (revealTargets.length) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.2
        });

        revealTargets.forEach(section => {
            section.classList.add("hidden");
            observer.observe(section);
        });

    }

    console.log("Portfolio Loaded Successfully 🚀");

});