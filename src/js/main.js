import polyfills from './polyfills';
import detectTouch from './detectTouch';
import PopularsSlider from './popularsSlider';
import CustomSelects from './customSelects';
import SelectorRing from './selectorRing';
import ShowHiddenCheckboxes from './showHiddenCheckboxes';
import FranchiseGallery from './franchiseGallery';
import FilterTabs from './filterTabs';
import CatalogAccordions from './catalogAccordions';

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
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
