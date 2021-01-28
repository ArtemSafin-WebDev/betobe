import Choices from 'choices.js';

export default function CustomSelects() {
    const selects = Array.from(document.querySelectorAll('.js-custom-select'));

    function initializeCustomSelect(element) {
        new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        });
    }

    window.betobeAPI.initializeCustomSelect = initializeCustomSelect;

    selects.forEach(element => {
        initializeCustomSelect(element);
    });

    const datepickerSelects = Array.from(document.querySelectorAll('.pika-select'));
    console.log('Datepicker selects', datepickerSelects);

    datepickerSelects.forEach(select => {
        new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        });
    });

    const multipleSelects = Array.from(document.querySelectorAll('.js-multiple-select'));

    function initializeMultiselect(select) {
        new Choices(select, {
            removeItemButton: true,
            maxItemCount: select.hasAttribute('data-max-choices') ? +select.getAttribute('data-max-choices') : -1,
            noResultsText: 'Ничего не найдено',
            noChoicesText: 'Нет элементов для выбора',
            itemSelectText: '',
            position: 'bottom',
            maxItemText: maxItemCount => {
                return `Можно добавить только ${maxItemCount} элементов`;
            }
        });
    }

    window.betobeAPI.initializeMultiselect = initializeMultiselect;

    multipleSelects.forEach(select => {
        initializeMultiselect(select);
    });
}
