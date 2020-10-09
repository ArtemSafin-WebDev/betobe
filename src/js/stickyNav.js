import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOBILE_WIDTH } from './constants';


gsap.registerPlugin(ScrollTrigger);

export default function StickyNav() {

    // if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
    //     return;
    // }
    const elements = Array.from(document.querySelectorAll('.js-sticky-nav'));

    elements.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            scrub: true,
            markers: false,
            pin: true,
            pinSpacing: false,
            endTrigger: 'html',
            end: 'bottom top',
            toggleClass: "sticky"
        });

        window.stickyNav = {
            height: element.offsetHeight
        }
    });


  
}
