import { MOBILE_WIDTH } from './constants';
import accordionsFactory from './accordionsFactory';

export default function CatalogAccordions() {
    let factory = null;
    const initializeCatalogCards = () => {
        if (factory) {
            factory.destroy();
            factory = null;
        }
        factory = accordionsFactory(Array.from(document.querySelectorAll('.franchise-catalog__list-item')));

        factory.init();
    };

    window.initializeCatalogCards = initializeCatalogCards;

    initializeCatalogCards();

    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        document.addEventListener('click', event => {
            if (event.target.matches('.franchise-catalog__list-item') || event.target.closest('.franchise-catalog__list-item')) {
                const item = event.target.matches('.franchise-catalog__list-item')
                    ? event.target
                    : event.target.closest('.franchise-catalog__list-item');

                const accordionBtn = item.querySelector('.js-accordion-btn');

                if (!accordionBtn) {
                    console.warn('No accordion btn');
                    return;
                }

                const clickInsideBottomButton =
                    event.target.matches('.franchise-catalog__card-open-close') || event.target.closest('.franchise-catalog__card-open-close');

                const clickInsideBurger =
                    event.target.matches('.franchise-catalog__card-actions-accordion-toggle') ||
                    event.target.closest('.franchise-catalog__card-actions-accordion-toggle');

                if (clickInsideBottomButton || clickInsideBurger) {
                    event.preventDefault();
                    accordionBtn.click();
                }
            }
        });
    }

    
}
