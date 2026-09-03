document.addEventListener("DOMContentLoaded", function () {
    const nav = document.createElement("nav");

    nav.innerHTML = `
        <div class="navbar">
            <a href="index.html">Home</a>
            <a href="experience.html">Experience</a>
            <a href="contact.html">Contact</a>
            <a href="hobbies.html">Hobbies</a>
        </div>
    `;

    document.body.prepend(nav);
});
