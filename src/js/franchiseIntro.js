import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function FranchiseIntro() {
    const blocks = Array.from(document.querySelectorAll('.js-franchise-intro'));

    blocks.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.franchise-intro__arrow--next'),
                prevEl: element.querySelector('.franchise-intro__arrow--prev')
            }
        });
    });
}
