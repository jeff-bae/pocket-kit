/**
 * Pocket UI — modal.js
 * Modal open/close/focus-trap
 */
(function () {
    let mousedownOnOverlay = false;

    function openModal(modalId) {
        const overlay = document.querySelector(`[data-modal="${modalId}"]`);
        if (!overlay) return;
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        const firstFocusable = overlay.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
        overlay.addEventListener('mousedown', onOverlayMousedown);
        overlay.addEventListener('click', onOverlayClick);
        document.addEventListener('keydown', onEscape);
    }

    function closeModal(modalId) {
        const overlay = document.querySelector(`[data-modal="${modalId}"]`);
        if (!overlay) return;
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        overlay.removeEventListener('mousedown', onOverlayMousedown);
        overlay.removeEventListener('click', onOverlayClick);
        document.removeEventListener('keydown', onEscape);
    }

    function onOverlayMousedown(e) {
        mousedownOnOverlay = (e.target === e.currentTarget);
    }

    function onOverlayClick(e) {
        if (e.target === e.currentTarget && mousedownOnOverlay) {
            const id = e.currentTarget.dataset.modal;
            closeModal(id);
        }
        mousedownOnOverlay = false;
    }

    function onEscape(e) {
        if (e.key === 'Escape') {
            const openOverlay = document.querySelector('.modal-overlay:not(.hidden)');
            if (openOverlay) closeModal(openOverlay.dataset.modal);
        }
    }

    function initModals() {
        document.querySelectorAll('[data-modal-open]').forEach(btn => {
            btn.addEventListener('click', () => openModal(btn.dataset.modalOpen));
        });

        document.querySelectorAll('[data-modal-close]').forEach(btn => {
            btn.addEventListener('click', () => closeModal(btn.dataset.modalClose));
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModals);
    } else {
        initModals();
    }

    window.PocketUI = window.PocketUI || {};
    window.PocketUI.modal = { openModal, closeModal };
})();
