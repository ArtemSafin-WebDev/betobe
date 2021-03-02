document.addEventListener('DOMContentLoaded', function() {
    var deleteForm = document.querySelector('#delete-modal-form');

    if (deleteForm) {
        deleteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (typeof window.openModal === 'function') {
                window.closeAllModals();
                window.openModal('#delete-success-modal');
            }
        });
    }
});
