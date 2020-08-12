import polyfills from './polyfills';
import detectTouch from './detectTouch';
import PopularsSlider from './popularsSlider';
import CustomSelects from './customSelects';
import SelectorRing from './selectorRing';
import ShowHiddenCheckboxes from './showHiddenCheckboxes';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    PopularsSlider();
    CustomSelects();
    SelectorRing();
    ShowHiddenCheckboxes();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
