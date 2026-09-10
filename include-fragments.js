(async function () {
    async function includeFragment(selector, url) {
        const el = document.querySelector(selector);
        if (!el) return;
        try {
            const res = await fetch(url);
            if (!res.ok) {
                console.error('Failed to fetch', url, res.status);
                return;
            }
            el.innerHTML = await res.text();
        } catch (e) {
            console.error('Include failed for', url, e);
        }
    }

    // Insert header and footer fragments
    await includeFragment('#site-header', '/includes/header.html');
    await includeFragment('#site-footer', '/includes/footer.html');

    // After header is present, load nav.js so it finds the nav links
    const script = document.createElement('script');
    script.src = '/nav.js';
    document.body.appendChild(script);
})();
