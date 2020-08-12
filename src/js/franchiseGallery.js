import { Swiper, Autoplay, Navigation } from 'swiper';


Swiper.use([Autoplay, Navigation]);

export default function FranchiseGallery() {
    const sliders = Array.from(document.querySelectorAll('.js-franchise-gallery-slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 18,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-catalog__card-details-gallery-slider-arrow--next'),
                prevEl: element.querySelector('.franchise-catalog__card-details-gallery-slider-arrow--prev')
            }
        });


       
    });
}
