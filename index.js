// Toggle Navigation Menu
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");

    // Check Visibility of Button
    if (visibility == "false") {
        nav.setAttribute("data-visible", true);
    }

    else nav.setAttribute("data-visible", false);
});