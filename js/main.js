/* =====================================================
   THE LAST TREE — INTERACTIONS
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});


/* Close mobile menu when a link is clicked */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* ================= COMPARISON SLIDER ================= */

const comparisonSlider =
    document.getElementById("comparison-slider");

const comparisonBefore =
    document.querySelector(".comparison-before");

const comparisonLine =
    document.querySelector(".comparison-line");


comparisonSlider.addEventListener("input", () => {

    const value = comparisonSlider.value;

    comparisonBefore.style.width = `${value}%`;

    comparisonLine.style.left = `${value}%`;

});


/* ================= TREE IMPACT ================= */

const impactCards =
    document.querySelectorAll(".impact-card");

const impactResult =
    document.getElementById("impact-result");

const impactTitle =
    document.getElementById("impact-title");

const impactDescription =
    document.getElementById("impact-description");


const impactData = {

    plant: {
        title: "PLANT",
        description:
            "Planting a suitable tree creates shade, habitat and a greener future for the street."
    },

    protect: {
        title: "PROTECT",
        description:
            "Protecting existing mature trees preserves years of growth that cannot be replaced overnight."
    },

    report: {
        title: "REPORT",
        description:
            "Reporting damaged or threatened trees helps bring attention to problems before they become permanent."
    }

};


impactCards.forEach(card => {

    card.addEventListener("click", () => {

        const action = card.dataset.action;

        /* Remove active state from all cards */

        impactCards.forEach(item => {
            item.classList.remove("active");
        });

        /* Activate selected card */

        card.classList.add("active");

        /* Update result */

        impactTitle.textContent =
            impactData[action].title;

        impactDescription.textContent =
            impactData[action].description;

        impactResult.classList.add("show");

        /* Scroll slightly toward result */

        setTimeout(() => {

            impactResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);

    });

});


/* ================= LIGHTWEIGHT SCROLL ================= */

/* ================= REVEAL ON SCROLL ================= */

const revealElements =
    document.querySelectorAll(
        ".city-section, .tree-section, .cost-section, " +
        ".comparison-section, .impact-section, " +
        ".timeline-section, .final-section"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= YEAR TIMELINE ================= */

// No continuous mouse/scroll effects here so the page stays smooth.

/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});