(function () {
    function initApiPreviews() {
        document.querySelectorAll('.api-preview-modal').forEach(function (modal) {
            var navItems = modal.querySelectorAll('.api-nav-item');
            var panels   = modal.querySelectorAll('.api-panel');

            navItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    navItems.forEach(function (n) { n.classList.remove('active'); });
                    item.classList.add('active');

                    var target = item.dataset.endpoint;
                    panels.forEach(function (p) {
                        p.hidden = p.dataset.panel !== target;
                    });
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApiPreviews);
    } else {
        initApiPreviews();
    }
})();
