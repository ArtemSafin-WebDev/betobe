import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);

export default function ProfitSlider() {
    const sliders = Array.from(document.querySelectorAll('.js-franchise-profit-slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 18,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-profit__slider-arrow--next'),
                prevEl: element.querySelector('.franchise-profit__slider-arrow--prev')
            }
        });
    });
}
