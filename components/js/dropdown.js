/**
 * Pocket Kit — dropdown.js
 * Dropdown menu open/close logic (fallback for non-Popover API browsers)
 */
(function () {
    function initDropdowns() {
        document.querySelectorAll('.dropdown-wrapper').forEach(wrapper => {
            const trigger = wrapper.querySelector('[data-dropdown-trigger]');
            const menu = wrapper.querySelector('.dropdown');
            if (!trigger || !menu) return;

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = wrapper.classList.contains('open');
                closeAll();
                if (!isOpen) {
                    wrapper.classList.add('open');
                    trigger.setAttribute('aria-expanded', 'true');
                    const searchInput = menu.querySelector('.dropdown-search input');
                    if (searchInput) {
                        searchInput.value = '';
                        filterItems(menu, '');
                        setTimeout(() => searchInput.focus(), 0);
                    }
                }
            });

            // Prevent menu clicks from bubbling to document (which would close it).
            // Only close when a regular item (no checkbox/radio inside) is clicked.
            menu.addEventListener('click', (e) => {
                e.stopPropagation();
                const item = e.target.closest('.dropdown-item');
                if (item && !item.querySelector('input[type="checkbox"], input[type="radio"]')) {
                    closeAll();
                }
            });

            const searchInput = menu.querySelector('.dropdown-search input');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    filterItems(menu, e.target.value);
                });
                searchInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeAll();
                });
            }
        });

        document.addEventListener('click', closeAll);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAll();
        });
    }

    function filterItems(menu, query) {
        const term = query.trim().toLowerCase();
        const items = menu.querySelectorAll('.dropdown-item');
        let visibleCount = 0;

        items.forEach(item => {
            const text = item.textContent.trim().toLowerCase();
            const match = !term || text.includes(term);
            item.style.display = match ? '' : 'none';
            if (match) visibleCount++;
        });

        let empty = menu.querySelector('.dropdown-empty');
        if (visibleCount === 0) {
            if (!empty) {
                empty = document.createElement('div');
                empty.className = 'dropdown-empty';
                empty.textContent = 'No results';
                menu.appendChild(empty);
            }
            empty.style.display = '';
        } else if (empty) {
            empty.style.display = 'none';
        }
    }

    function closeAll() {
        document.querySelectorAll('.dropdown-wrapper.open').forEach(wrapper => {
            wrapper.classList.remove('open');
            const trigger = wrapper.querySelector('[data-dropdown-trigger]');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdowns);
    } else {
        initDropdowns();
    }

    window.PocketKit = window.PocketKit || {};
    window.PocketKit.dropdown = { closeAll };
})();
