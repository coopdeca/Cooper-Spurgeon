document.addEventListener("DOMContentLoaded", function () {

    // Get all navigation links
    const navLinks =
        document.querySelectorAll(".nav-links a");


    // Get the current page
    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    // If GitHub Pages doesn't show index.html,
    // treat the page as Home
    if (currentPage === "") {

        currentPage = "index.html";

    }


    // Highlight the current page
    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
                .split("/")
                .pop()
                .toLowerCase();


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
