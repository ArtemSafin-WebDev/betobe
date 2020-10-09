import { Swiper, Autoplay, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Autoplay, Navigation]);

export default function PopularsSlider() {
    const sliders = Array.from(document.querySelectorAll('.js-populars-slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 14,
                watchOverflow: true,
            })
        } else {
            const slider = new Swiper(container, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
                loopedSlides: 5,
                watchOverflow: true,
                speed: 3500,
                allowTouchMove: false,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                }
            });

            element.addEventListener('mouseenter', () => {
                slider.autoplay.stop();
               
               
            })
            element.addEventListener('mouseleave', () => {
                if (autoDisabled) return;
                slider.autoplay.start();
               
            })

            const prevArrow = element.querySelector('.populars__slider-arrow--prev');
            const nextArrow = element.querySelector('.populars__slider-arrow--next');

            let autoDisabled = false;

            nextArrow.addEventListener('click', () => {
                if (!autoDisabled) {
                    slider.slideToLoop(slider.realIndex + 1, 500);
                    slider.autoplay.stop();
                    autoDisabled = true;
                    slider.params.speed = 500;
                    slider.params.allowTouchMove = true;
                    slider.update(true);
                    const parent = container.closest('.populars__slider');

                    if (parent) parent.classList.add('normal-mode');
                } else {
                    slider.slideNext();
                }
            });
            prevArrow.addEventListener('click', () => {
                if (!autoDisabled) {
                    slider.slideToLoop(slider.realIndex - 1, 500);
                    slider.autoplay.stop();
                    autoDisabled = true;
                    slider.params.speed = 500;
                    slider.params.allowTouchMove = true;
                    slider.update(true);

                    const parent = container.closest('.populars__slider');

                    if (parent) parent.classList.add('normal-mode');
                } else {
                    slider.slidePrev();
                }
            });
        }
    });
}
