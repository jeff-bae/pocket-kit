/**
 * Pocket UI — utils.js
 * Shared utility functions
 */
(function () {
    /* Copy text to clipboard */
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text).then(() => {
                if (window.PocketUI?.toast) {
                    window.PocketUI.toast.success('Copied to clipboard!', 2000);
                }
            });
        }
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }

    /* Initialize copy-to-clipboard buttons */
    function initCopyButtons() {
        document.querySelectorAll('.copy-to-clipboard[data-copy]').forEach(btn => {
            btn.addEventListener('click', () => copyToClipboard(btn.dataset.copy));
        });
    }

    /* Rotate animation (refresh buttons) */
    function initRotateButtons() {
        document.querySelectorAll('.rotate-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.add('loading');
                setTimeout(() => this.classList.remove('loading'), 800);
            });
        });
    }

    /* Bulk select (table checkboxes) */
    function initBulkSelect() {
        document.querySelectorAll('[data-bulk-master]').forEach(master => {
            const tableId = master.dataset.bulkMaster;
            const slaves = document.querySelectorAll(`[data-bulk-item="${tableId}"]`);
            const bulkbar = document.querySelector(`[data-bulkbar="${tableId}"]`);
            const countEl = bulkbar?.querySelector('[data-bulk-count]');

            function updateBulkbar() {
                const checked = [...slaves].filter(s => s.checked);
                if (bulkbar) bulkbar.hidden = checked.length === 0;
                if (countEl)  countEl.textContent = checked.length;
            }

            master.addEventListener('change', () => {
                slaves.forEach(s => s.checked = master.checked);
                updateBulkbar();
            });

            slaves.forEach(s => s.addEventListener('change', () => {
                master.checked = [...slaves].every(s => s.checked);
                master.indeterminate = !master.checked && [...slaves].some(s => s.checked);
                updateBulkbar();
            }));

            const resetBtn = bulkbar?.querySelector('[data-bulk-reset]');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    master.checked = false;
                    master.indeterminate = false;
                    slaves.forEach(s => s.checked = false);
                    updateBulkbar();
                });
            }
        });
    }

    function init() {
        initCopyButtons();
        initRotateButtons();
        initBulkSelect();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.PocketUI = window.PocketUI || {};
    window.PocketUI.utils = { copyToClipboard };
})();
