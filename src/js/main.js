import polyfills from './polyfills';
import detectTouch from './detectTouch';
import PopularsSlider from './popularsSlider';
import CustomSelects from './customSelects';
import SelectorRing from './selectorRing';
import ShowHiddenCheckboxes from './showHiddenCheckboxes';
import FranchiseGallery from './franchiseGallery';
import FilterTabs from './filterTabs';
import CatalogAccordions from './catalogAccordions';
import FranchiseIntro from './franchiseIntro';
import FranchiseGeography from './franchiseGeography';
import AnchorLinks from './anchorLinks';
import StickyNav from './stickyNav';
import MosaicSlider from './mosaicSlider';
import ProfitSlider from './profitSlider';
import PhoneMask from './phoneMask';
import FranchiseReviews from './franchiseReviews';
import MediaSlider from './mediaSlider';
import HowWeWork from './howWeWork';
import FaqAccordions from './faqAccordions';
import BurgerMenu from './burgerMenu';
import FiltersButtonActivity from './filtersButtonActivity';
import MediaModals from './mediaModals';
import FilterDropdowns from './filterDropdowns';
import FilterRangeInputs from './rangeInputs';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    PopularsSlider();
    CustomSelects();
    SelectorRing();
    ShowHiddenCheckboxes();
    FranchiseGallery();
    FilterTabs();
    CatalogAccordions();
    FranchiseIntro();
    FranchiseGeography();
    AnchorLinks();
    StickyNav();
    MosaicSlider();
    ProfitSlider();
    PhoneMask();
    FranchiseReviews();
    MediaSlider();
    HowWeWork();
    FaqAccordions();
    BurgerMenu();
   
    MediaModals();
    FilterDropdowns();
    FilterRangeInputs();

    FiltersButtonActivity();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
