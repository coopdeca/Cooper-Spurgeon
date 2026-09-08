document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector(".nav-links");

    if (!nav) {
        return;
    }


    // =====================================
    // NAVIGATION
    // =====================================

    const navigation = [
        {
            name: "Home",
            page: "index.html"
        },
        {
            name: "About",
            page: "about.html"
        },
        {
            name: "Experience",
            page: "experience.html"
        },
        {
            name: "Contact",
            page: "contact.html"
        }
    ];


    // =====================================
    // CREATE NAVIGATION LINKS
    // =====================================

    navigation.forEach(function (item) {

        const listItem = document.createElement("li");

        const link = document.createElement("a");

        link.textContent = item.name;

        link.href = item.page;


        // Add link to navigation

        listItem.appendChild(link);

        nav.appendChild(listItem);

    });


    // =====================================
    // FIND CURRENT PAGE
    // =====================================

    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    // GitHub Pages sometimes loads
    // the homepage without index.html

    if (currentPage === "") {
        currentPage = "index.html";
    }


    // =====================================
    // HIGHLIGHT CURRENT PAGE
    // =====================================

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
                .toLowerCase();


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
