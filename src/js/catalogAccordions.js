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
    }
}