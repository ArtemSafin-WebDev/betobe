import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollUp() {
    
    const scrollTopBtns = Array.from(document.querySelectorAll('.js-scroll-top-btn'));

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
