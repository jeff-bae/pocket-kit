/**
 * Pocket UI — dropdown.js
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
                }
            });
        });

        document.addEventListener('click', closeAll);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAll();
        });
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

    window.PocketUI = window.PocketUI || {};
    window.PocketUI.dropdown = { closeAll };
})();
