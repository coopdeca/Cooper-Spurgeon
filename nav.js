document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");


    /* ================================
       MOBILE MENU
       ================================ */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const menuIsOpen =
                navLinks.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                menuIsOpen
            );

        });
    }


    /* ================================
       AUTOMATIC ACTIVE PAGE
       ================================ */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    if (navLinks) {

        const navigationItems =
            navLinks.querySelectorAll("a");


        navigationItems.forEach(function (link) {

            const linkPage =
                link.getAttribute("href")
                    .split("/")
                    .pop()
                    .toLowerCase();


            if (
                linkPage === currentPage ||
                (
                    currentPage === "" &&
                    linkPage === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });

    }


    /* ================================
       CLOSE MOBILE MENU
       AFTER CLICKING A LINK
       ================================ */

    if (navLinks) {

        navLinks
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove("open");

                        if (menuToggle) {

                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );

            });

    }


    /* ================================
       ESCAPE KEY CLOSES MENU
       ================================ */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                navLinks?.classList.remove("open");

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});
