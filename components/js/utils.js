/**
 * Pocket Kit — utils.js
 * Shared utility functions
 */
(function () {
    /* Copy text to clipboard */
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text).then(() => {
                if (window.PocketKit?.toast) {
                    window.PocketKit.toast.success('Copied to clipboard!', 2000);
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

    /* Table column sort */
    function sortValue(row, index) {
        var cell = row.children[index];
        if (!cell) return '';
        // data-sort attribute takes priority
        if (cell.dataset.sort !== undefined) return cell.dataset.sort;
        // formatted-date: use primary-date only to avoid concatenation
        var primaryDate = cell.querySelector('.primary-date');
        if (primaryDate) return primaryDate.textContent.trim();
        return cell.textContent.trim();
    }

    function compareValues(a, b) {
        // Numeric — strip formatting chars (commas, %, units like MB/KB/ms)
        var numA = parseFloat(a.replace(/[^0-9.-]/g, ''));
        var numB = parseFloat(b.replace(/[^0-9.-]/g, ''));
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        // Date string (YYYY-MM-DD / ISO)
        var dA = Date.parse(a), dB = Date.parse(b);
        if (!isNaN(dA) && !isNaN(dB)) return dA - dB;
        // Fallback: locale string compare
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
    }

    function initTableSort() {
        document.querySelectorAll('.records-table').forEach(function (table) {
            table.querySelectorAll('thead th.sort-handle').forEach(function (th) {
                th.addEventListener('click', function () {
                    var ascending = th.classList.contains('asc');

                    // Reset all headers in this table
                    table.querySelectorAll('thead th').forEach(function (h) {
                        h.classList.remove('asc', 'desc');
                    });
                    th.classList.add(ascending ? 'desc' : 'asc');

                    var colIndex = Array.from(th.parentElement.children).indexOf(th);
                    var tbody = table.querySelector('tbody');

                    // Skip colspan rows (empty state etc.)
                    var rows = Array.from(tbody.querySelectorAll('tr')).filter(function (r) {
                        return !r.querySelector('td[colspan]');
                    });

                    rows.sort(function (a, b) {
                        var cmp = compareValues(sortValue(a, colIndex), sortValue(b, colIndex));
                        return ascending ? -cmp : cmp;
                    });

                    rows.forEach(function (r) { tbody.appendChild(r); });
                });
            });
        });
    }

    function init() {
        initCopyButtons();
        initRotateButtons();
        initBulkSelect();
        initTableSort();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.PocketKit = window.PocketKit || {};
    window.PocketKit.utils = { copyToClipboard };
})();
