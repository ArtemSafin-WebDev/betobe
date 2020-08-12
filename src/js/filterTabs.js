import tabsFactory from "./tabsFactory";
import { MOBILE_WIDTH } from './constants';

export default function FilterTabs() {
   
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const tabs = Array.from(document.querySelectorAll('.js-filter-tabs'));

        tabsFactory(tabs).init();
    }
}