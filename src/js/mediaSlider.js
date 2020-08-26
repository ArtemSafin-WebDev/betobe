import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);

export default function MediaSlider() {
    const sliders = Array.from(document.querySelectorAll('.js-media-slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
           
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-media__slider-arrow--next'),
                prevEl: element.querySelector('.franchise-media__slider-arrow--prev')
            },
            breakpoints: {
                768: {
                    spaceBetween: 34,
                    slidesPerView: 3
                }
            }
        });
    });
}
