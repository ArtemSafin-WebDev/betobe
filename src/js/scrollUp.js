import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollUp() {
    
    const scrollTopBtns = Array.from(document.querySelectorAll('.js-scroll-top-btn'));


    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 80) {
            document.body.classList.add('show-scroll-top')
        } else {
            document.body.classList.remove('show-scroll-top')
        }
    })

    scrollTopBtns.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: 0,
                    ease: 'easeOut',
                    autoKill: true
                }
            });
        })
    })
}
