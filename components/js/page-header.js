/**
 * Pocket Kit — page-header.js
 * Injects a consistent sticky header on all demo pages.
 * Wraps body content in .page-body for uniform layout
 * unless <body data-no-wrap> is set (e.g. navigation.html).
 */
(function () {
    var CSS = [
        'body { padding: 0 !important; max-width: none !important; margin: 0 !important; }',
        '.kit-header {',
        '  display: flex; align-items: center; gap: 8px;',
        '  padding: 10px 30px;',
        '  border-bottom: 1px solid var(--surfaceAlt2Color);',
        '  background: var(--surfaceColor);',
        '  position: sticky; top: 0; z-index: 200; flex-shrink: 0;',
        '}',
        '.kit-back-btn {',
        '  display: inline-flex; align-items: center; gap: 5px;',
        '  height: 35px; padding: 0 12px;',
        '  border: none; border-radius: 30px; background: transparent;',
        '  color: var(--surfaceTxtHintColor); font-family: var(--fontFamily);',
        '  font-size: 13px; font-weight: 600; cursor: pointer;',
        '  text-decoration: none; transition: background 0.15s, color 0.15s;',
        '  flex-shrink: 0;',
        '}',
        '.kit-back-btn:hover { background: var(--surfaceAlt1Color); color: var(--surfaceTxtColor); text-decoration: none; }',
        '.kit-page-title { font-size: 15px; font-weight: 600; color: var(--surfaceTxtColor); }',
        '.kit-spacer { flex: 1; }',
        '.kit-theme-label { font-size: 13px; color: var(--surfaceTxtHintColor); }',
        '.page-body { max-width: var(--lgWrapperWidth); margin: 0 auto; padding: var(--spacing); }',
    ].join('\n');

    function ensureCSS(href) {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for (var i = 0; i < links.length; i++) {
            if (links[i].href.indexOf(href) !== -1) return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../components/css/' + href;
        document.head.insertBefore(link, document.head.firstChild);
    }

    function getTitle() {
        return (document.title || '').split('—')[0].trim();
    }

    function inject() {
        ensureCSS('buttons.css');

        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        var header = document.createElement('div');
        header.className = 'kit-header';
        header.innerHTML =
            '<a href="../index.html" class="kit-back-btn">' +
                '<i class="ri-arrow-left-s-line"></i> Components' +
            '</a>' +
            '<span class="kit-page-title">' + getTitle() + '</span>' +
            '<div class="kit-spacer"></div>' +
            '<span class="kit-theme-label">Theme:</span>' +
            '<button class="btn sm pill secondary" data-theme-btn="light"><i class="ri-sun-line"></i> Light</button>' +
            '<button class="btn sm pill secondary" data-theme-btn="dark"><i class="ri-moon-line"></i> Dark</button>' +
            '<button class="btn sm pill secondary" data-theme-btn="auto"><i class="ri-subtract-line"></i> Auto</button>';

        if (document.body.hasAttribute('data-no-wrap')) {
            document.body.insertBefore(header, document.body.firstChild);
        } else {
            var wrapper = document.createElement('div');
            wrapper.className = 'page-body';
            while (document.body.firstChild) {
                wrapper.appendChild(document.body.firstChild);
            }
            document.body.appendChild(header);
            document.body.appendChild(wrapper);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }

    window.PocketKit = window.PocketKit || {};
    window.PocketKit.pageHeader = { inject: inject };
})();
