import { Swiper, Autoplay, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';


Swiper.use([Autoplay, Navigation]);

export default function FranchiseGallery() {
    const sliders = Array.from(document.querySelectorAll('.js-franchise-gallery-slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 18,
            autoHeight: window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches ? true : false,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-catalog__card-details-gallery-slider-arrow--next'),
                prevEl: element.querySelector('.franchise-catalog__card-details-gallery-slider-arrow--prev')
            }
        });

        
    });
}
