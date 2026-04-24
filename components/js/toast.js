/**
 * Pocket Kit — toast.js
 * Toast notification system
 */
(function () {
    let container;

    const ICONS = {
        success: 'ri-checkbox-circle-line',
        danger:  'ri-error-warning-line',
        warning: 'ri-alert-line',
        info:    'ri-information-line',
        default: 'ri-notification-3-line',
    };

    function getContainer() {
        if (!container) {
            container = document.querySelector('.toasts-container');
            if (!container) {
                container = document.createElement('div');
                container.className = 'toasts-container';
                document.body.appendChild(container);
            }
        }
        return container;
    }

    function show(message, type = 'default', duration = 4000) {
        const c = getContainer();
        const icon = ICONS[type] || ICONS.default;

        const toast = document.createElement('div');
        toast.className = `toast ${type !== 'default' ? type : ''}`.trim();
        toast.innerHTML = `
            <div class="toast-icon"><i class="${icon}" aria-hidden="true"></i></div>
            <div class="toast-content">${message}</div>
            <button type="button" class="toast-remove" aria-label="Dismiss">
                <i class="ri-close-line" aria-hidden="true"></i>
            </button>
        `;

        toast.querySelector('.toast-remove').addEventListener('click', () => remove(toast));
        c.appendChild(toast);

        if (duration > 0) {
            setTimeout(() => remove(toast), duration);
        }

        return toast;
    }

    function remove(toast) {
        if (!toast || !toast.parentNode) return;
        toast.style.transition = 'opacity 0.2s, transform 0.2s';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 220);
    }

    function success(msg, dur) { return show(msg, 'success', dur); }
    function danger(msg, dur)  { return show(msg, 'danger', dur); }
    function warning(msg, dur) { return show(msg, 'warning', dur); }
    function info(msg, dur)    { return show(msg, 'info', dur); }

    window.PocketKit = window.PocketKit || {};
    window.PocketKit.toast = { show, success, danger, warning, info };
})();
