/**
 * Pocket UI — theme.js
 * Dark / Light / Auto color scheme management
 */
(function () {
    const STORAGE_KEY = 'pocket-ui-color-scheme';
    const root = document.documentElement;

    function applyScheme(scheme) {
        root.setAttribute('data-color-scheme', scheme);
        localStorage.setItem(STORAGE_KEY, scheme);
        document.querySelectorAll('[data-theme-btn]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.themeBtn === scheme);
        });
    }

    function init() {
        const saved = localStorage.getItem(STORAGE_KEY) || 'auto';
        applyScheme(saved);

        document.querySelectorAll('[data-theme-btn]').forEach(btn => {
            btn.addEventListener('click', () => applyScheme(btn.dataset.themeBtn));
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.PocketUI = window.PocketUI || {};
    window.PocketUI.theme = { applyScheme };
})();
