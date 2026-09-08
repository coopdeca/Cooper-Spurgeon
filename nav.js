document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("nav a");

    let currentPage = window.location.pathname
        .split("/")
        .pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    links.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });

});
