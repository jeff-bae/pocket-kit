/**
 * Pocket Kit — theme.js
 * Color scheme (light/dark/auto) + accent color management
 */
(function () {
    const SCHEME_KEY = 'pocket-kit-color-scheme';
    const ACCENT_KEY = 'pocket-kit-accent';
    const root = document.documentElement;

    function applyScheme(scheme) {
        root.setAttribute('data-color-scheme', scheme);
        localStorage.setItem(SCHEME_KEY, scheme);
        document.querySelectorAll('[data-theme-btn]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.themeBtn === scheme);
        });
    }

    function applyAccent(accent) {
        root.setAttribute('data-accent', accent);
        localStorage.setItem(ACCENT_KEY, accent);
        document.querySelectorAll('[data-accent-btn]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.accentBtn === accent);
        });
    }

    function init() {
        const savedScheme = localStorage.getItem(SCHEME_KEY) || 'auto';
        applyScheme(savedScheme);

        const savedAccent = localStorage.getItem(ACCENT_KEY) || 'blue';
        applyAccent(savedAccent);

        document.querySelectorAll('[data-theme-btn]').forEach(btn => {
            btn.addEventListener('click', () => applyScheme(btn.dataset.themeBtn));
        });

        document.querySelectorAll('[data-accent-btn]').forEach(btn => {
            btn.addEventListener('click', () => applyAccent(btn.dataset.accentBtn));
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.PocketKit = window.PocketKit || {};
    window.PocketKit.theme = { applyScheme, applyAccent };
})();
