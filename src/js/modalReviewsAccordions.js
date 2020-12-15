
import newAccordions from './newAccordions';

export default function ModalReviewsAccordions() {
    newAccordions(Array.from(document.querySelectorAll('.js-modals-reviews-accordion')), -1, 0.4).init();
}