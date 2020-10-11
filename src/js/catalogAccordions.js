import { MOBILE_WIDTH } from './constants';
import accordionsFactory from './accordionsFactory';

export default function CatalogAccordions() {
    const catalogCards = Array.from(document.querySelectorAll('.franchise-catalog__list-item'));

    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        console.log(catalogCards);

        accordionsFactory(catalogCards).init();

        const showMoreBtns = Array.from(document.querySelectorAll('.franchise-catalog__card-details-btn'));

        showMoreBtns.forEach(btn => {
           
            btn.addEventListener('click', event => {
                event.preventDefault();
            });
        });

        
    } else {
        const accordions = accordionsFactory(catalogCards);
        accordions.init();

        const instances = accordions.getInstances();

        console.log('Instances', instances);

        instances.forEach(instance => {
            const element = instance.element;
            const handler = instance.handler;

            element.addEventListener('click', event => {
                
               

                // const clickInsideDescription =
                //     event.target.matches('.franchise-catalog__card-title-description') ||
                //     event.target.closest('.franchise-catalog__card-title-description');
                const clickInsideBottomButton =
                    event.target.matches('.franchise-catalog__card-open-close') || event.target.closest('.franchise-catalog__card-open-close');

                const clickInsideBurger =
                    event.target.matches('.franchise-catalog__card-actions-accordion-toggle') ||
                    event.target.closest('.franchise-catalog__card-actions-accordion-toggle');

                if (clickInsideBottomButton || clickInsideBurger) {
                    event.preventDefault();
                    handler();
                }
            });
        });
    }
}
