import { lockScroll, unlockScroll } from './scrollBlocker';


export default function Modals() {
   
    window.closeAllModals = () => {
        const modals = Array.from(document.querySelectorAll('.modals__modal'));
        modals.forEach(modal => modal.classList.remove('shown'));
        unlockScroll();
    };

    window.openModal = id => {
        console.log('id', id);
        const modal = document.querySelector(id);

        if (modal) {
            modal.classList.add('shown');

            lockScroll(modal);
        } else {
            console.warn('Modal not found');
        }
    };
    document.addEventListener('click', event => {
        if (event.target.matches('.modals__modal') || event.target.matches('.js-modal-close') || event.target.closest('.js-modal-close')) {
            event.preventDefault();
            closeAllModals();
        }

        if (event.target.matches('.js-modal-open') || event.target.closest('.js-modal-open')) {
            event.preventDefault();
            const link = event.target.matches('.js-modal-open') ? event.target : event.target.closest('.js-modal-open');

            if (!link) {
                console.warn('No link found');
                return;
            }

            const hash = link.matches('a') ? link.hash : link.getAttribute('data-hash');

            if (!hash) {
                console.warn('No link href found');
                return;
            }
            closeAllModals();
            openModal(hash);
        }
    });
}
