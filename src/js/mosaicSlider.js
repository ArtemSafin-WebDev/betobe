import { Swiper, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Navigation]);


export default function MosaicSlider() {

    

    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }
    const elements = Array.from(document.querySelectorAll('.js-mosaic-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 0,
            speed: 700,
            // slidesPerColumn: 3,
            // slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.franchise-mosaic__slider-arrow--next'),
                prevEl: element.querySelector('.franchise-mosaic__slider-arrow--prev')
            }
        });
    })
}