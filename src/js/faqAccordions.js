import accordionsFactory from './accordionsFactory';

export default function FaqAccordions() {
    const elements = Array.from(document.querySelectorAll('.js-faq-accordion'));

    accordionsFactory(elements).init();
}
