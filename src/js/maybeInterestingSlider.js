
import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);

export default function MaybeInterestingSlider() {
    const elements = Array.from(document.querySelectorAll('.js-maybe-interesting-slider'));
    

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 10,
            slidesPerView: 'auto',
            speed: 700,
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            navigation: {
                nextEl: element.querySelector('.populars__slider-arrow--next'),
                prevEl: element.querySelector('.populars__slider-arrow--prev')
            },
            breakpoints: {
                768: {
                    spaceBetween: 30
                },
                1024: {
                    spaceBetween: 40
                }
            }
        });
    })
}