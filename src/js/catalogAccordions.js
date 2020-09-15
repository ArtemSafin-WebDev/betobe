import { MOBILE_WIDTH } from './constants';
import accordionsFactory from './accordionsFactory';

export default function CatalogAccordions() {
    const catalogCards = Array.from(document.querySelectorAll('.franchise-catalog__list-item'));

    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        console.log(catalogCards);

        accordionsFactory(catalogCards).init();

        const showMoreBtns = Array.from(document.querySelectorAll('.franchise-catalog__card-details-btn'));

        showMoreBtns.forEach(btn => {
            const originalText = btn.textContent;
            let clicked = false;
            btn.addEventListener('click', event => {
                event.preventDefault();
                clicked = !clicked;

                btn.textContent = clicked ? 'Скрыть' : originalText;
            });
        });

        // catalogCards.forEach(card => card.addEventListener('click', event => {
        //     if (event.target.matches('.franchise-catalog__card-specs-block') || event.target.closest('.franchise-catalog__card-specs-block')) {
        //         event.preventDefault();
        //     }
        // }))
    } else {
        const accordions = accordionsFactory(catalogCards);
        accordions.init();

        const instances = accordions.getInstances();

        console.log('Instances', instances);

        instances.forEach(instance => {
            const element = instance.element;
            const handler = instance.handler;

            element.addEventListener('click', event => {
                console.log('Event', event);
                // if (
                //     event.target.matches('.franchise-catalog__card-title-heading') ||
                //     event.target.closest('.franchise-catalog__card-title-heading')
                // ) {
                //     return;
                // } else if (event.target.matches('.franchise-catalog__card-details') || event.target.closest('.franchise-catalog__card-details')) {
                //     return;
                // } else if (event.target.matches('.franchise-catalog__card-actions') || event.target.closest('.franchise-catalog__card-actions')) {
                //     return;
                // } else if (event.target.matches('.franchise-catalog__card-like') || event.target.closest('.franchise-catalog__card-like')) {
                //     return;
                // } else {

                //     event.preventDefault();
                //     handler();
                // }

                const clickInsideDescription =
                    event.target.matches('.franchise-catalog__card-title-description') ||
                    event.target.closest('.franchise-catalog__card-title-description');
                const clickInsideBottomButton =
                    event.target.matches('.franchise-catalog__card-open-close') || event.target.closest('.franchise-catalog__card-open-close');

                const clickInsideBurger =
                    event.target.matches('.franchise-catalog__card-actions-accordion-toggle') ||
                    event.target.closest('.franchise-catalog__card-actions-accordion-toggle');

                if (clickInsideDescription || clickInsideBottomButton || clickInsideBurger) {
                    event.preventDefault();
                    handler();
                }
            });
        });
    }
}
