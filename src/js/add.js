import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import detectIt from 'detect-it';
import { MOBILE_WIDTH } from './constants';
import Sortable from "sortablejs";


gsap.registerPlugin(ScrollToPlugin);

export default function Add() {
    const addSteps = document.querySelector('.js-add-steps');
    if (addSteps) {
        const scrollContainer = document.querySelector('.add__steps-links');
        const nextBtn = document.querySelector('.add__steps-next-btn');
        const touchContainer = document.querySelector('.add__steps-content');
        const links = Array.from(document.querySelectorAll('.add__steps-link'));
        const scrollStep = 300;
        const initialActiveLink = links.find(link => link.classList.contains('active'));
        if (initialActiveLink && scrollContainer) {
            if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
                scrollContainer.scrollLeft = initialActiveLink.offsetLeft - getComputedStyle(document.documentElement)
                .getPropertyValue('--content-padding');
            } else {
                scrollContainer.scrollLeft = initialActiveLink.offsetLeft;
            }
            
        }

        nextBtn.addEventListener('click', event => {
            event.preventDefault();
            console.log('Clicked next btn');
            gsap.to(scrollContainer, { duration: 0.6, scrollTo: { x: scrollContainer.scrollLeft + scrollStep, autoKill: false }, ease: 'power2' });
        });

        if (!detectIt.hasTouch) {
            const hammertime = new Hammer(touchContainer);

            let startX = 0;

            let filterLinksClicks = false;
            hammertime.on('panstart', function(event) {
                filterLinksClicks = true;
                startX = scrollContainer.scrollLeft;
                console.log('Enabling links filtering');
            });
            hammertime.on('panmove', function(event) {
                scrollContainer.scrollLeft = Math.floor(startX - event.deltaX);
            });

            hammertime.on('panend', function(event) {
                setTimeout(() => {
                    filterLinksClicks = false;
                    console.log('Disabling links filtering');
                }, 200);
            });

            touchContainer.addEventListener('click', event => {
                if (event.target.matches('a') || event.target.closest('a')) {
                    if (filterLinksClicks) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            });
        }
    }


    const blocksOrder = document.querySelector('.js-blocks-order');

    if (blocksOrder) {

        window.blocksOrderOptions = {
           
            
        }

        if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            // blocksOrderOptions.handle = '.icon-list-burger';
            blocksOrderOptions.easing = "cubic-bezier(1, 0, 0, 1)";
            blocksOrderOptions.animation = 250;

        }

        const sortable = new Sortable(blocksOrder, window.blocksOrderOptions);

        window.blocksOrder = sortable;
    }
}
