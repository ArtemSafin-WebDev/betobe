import { Swiper, Autoplay } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Autoplay]);

export default function HowWeWork() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }

    
    const sliders = Array.from(document.querySelectorAll('.js-how-we-work'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            speed: 700
        });
    });
}
