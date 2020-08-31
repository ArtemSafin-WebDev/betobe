import { lockScroll, unlockScroll } from './scrollBlocker';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);

export default function BurgerMenu() {
    const mobileMenuBurger = document.querySelector('.page-header__burger');

    const mobileMenuScrollContainer = document.querySelector('.page-header__logo-menu-dropdown');

    if (mobileMenuBurger && mobileMenuScrollContainer) {
        let menuOpen = false;

        function openMenu() {

            if (window.closeAssistant) {
                window.closeAssistant();
            }

            if (window.closeCatalogMenu) {
                window.closeCatalogMenu();
            }
            gsap.to(window, { duration: 0.3, scrollTo: 0, clearProps: 'all', onComplete: () => lockScroll(mobileMenuScrollContainer) });
            menuOpen = true;
            document.body.classList.add('mobile-menu-open');

            
        }

        function closeMenu() {
            unlockScroll();
            menuOpen = false;
            document.body.classList.remove('mobile-menu-open');
        }

        mobileMenuBurger.addEventListener('click', event => {
            event.preventDefault();
            if (menuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });


        window.closeMobileMenu = closeMenu;


        
    }
}