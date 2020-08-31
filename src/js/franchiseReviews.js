import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);

export default function FranchiseReviews() {
    const sliders = Array.from(document.querySelectorAll('.js-franchise-reviews'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 18,
            centeredSlides: true,
            loop: true,
            slideToClickedSlide: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-reviews__slider-arrow--next'),
                prevEl: element.querySelector('.franchise-reviews__slider-arrow--prev')
            },
            breakpoints: {
              
               
              
                768: {
                    spaceBetween: 38,
                    slidesPerView: 'auto',
                },
              
               
            }
        });
    });
}
