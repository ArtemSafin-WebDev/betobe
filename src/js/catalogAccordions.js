import { MOBILE_WIDTH } from './constants';
import accordionsFactory from './accordionsFactory';

export default function CatalogAccordions() {
    const catalogCards = Array.from(document.querySelectorAll('.franchise-catalog__list-item'));

    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        console.log(catalogCards)
      
        accordionsFactory(catalogCards).init();

        const showMoreBtns = Array.from(document.querySelectorAll('.franchise-catalog__card-details-btn'));

        showMoreBtns.forEach(btn => {

            const originalText = btn.textContent;
            let clicked = false;
            btn.addEventListener('click', event => {
                event.preventDefault();
                clicked = !clicked;

                btn.textContent = clicked ? 'Скрыть' : originalText;
                
            })
        })


        // catalogCards.forEach(card => card.addEventListener('click', event => {
        //     if (event.target.matches('.franchise-catalog__card-specs-block') || event.target.closest('.franchise-catalog__card-specs-block')) {
        //         event.preventDefault();
        //     }
        // }))
    } else {
        const accordions = accordionsFactory(catalogCards);
        accordions.init();

        const instances = accordions.getInstances();


        console.log('Instances', instances)


        instances.forEach(instance => {
            const element = instance.element;
            const handler = instance.handler;


            element.addEventListener('click', event => {
                console.log('Event', event)
                if (event.target.matches('.franchise-catalog__card-title-heading') && event.target.closest('.franchise-catalog__card-title-heading')) {
                    return;
                    
                } else {
                    
                    event.preventDefault();
                    handler();
                }
            })
        })



    }
}