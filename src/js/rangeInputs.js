import noUiSlider from 'noUiSlider';
import { debounce } from 'lodash';

export default function FilterRangeInputs() {
    const elements = Array.from(document.querySelectorAll('.js-filters-range'));

    elements.forEach(element => {
        const inputs = Array.from(element.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"]'));

        const inputsClearBtns = Array.from(element.querySelectorAll('.filters__select-group-range-input-clear'));

        const rangeSliderElement = element.querySelector('.filters__select-group-range-slider');

        const min = parseInt(element.getAttribute('data-min'), 10);
        const max = parseInt(1 * element.getAttribute('data-max'), 10);
        const step = parseInt(1 * element.getAttribute('data-step'), 10);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const value = input.value;
                const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
                if (isNaN(newCleanedValue)) {
                    input.value = '';
                } else {
                    input.value = newCleanedValue.toLocaleString();
                }
            });
        });


        const startValue = inputs[0].value.replace(/\s/g, '').trim() ? parseFloat(inputs[0].value.replace(/\s/g, '').trim()) : '';
        const endValue = inputs[1].value.replace(/\s/g, '').trim() ? parseFloat(inputs[1].value.replace(/\s/g, '').trim()) : '';

        console.log({
            startValue, endValue
        })

        noUiSlider.create(rangeSliderElement, {
            start: [startValue ? startValue : min, endValue ? endValue : max],
            connect: true,
            range: {
                min,
                max
            },
            step
        });

        rangeSliderElement.noUiSlider.on('update', () => {
            const newValue = rangeSliderElement.noUiSlider.get();

            const lowerValue = parseInt(newValue[0], 10).toLocaleString();
            const upperValue = parseInt(newValue[1], 10).toLocaleString();

            console.log({
                lowerValue,
                upperValue
            });

            inputs[0].value = lowerValue;
            inputs[1].value = upperValue;

            const changeEvent = new Event('change');
            inputs[0].dispatchEvent(changeEvent);
            inputs[1].dispatchEvent(changeEvent);

        });

        const setFirstValue = debounce(function(value) {
            const newValue = parseInt(value.toString().replace(/\s/g, ''), 10);

            console.log('Setting first value', newValue)
            rangeSliderElement.noUiSlider.set([newValue, null]);
        }, 1200);
        const setSecondValue = debounce(function(value) {
            const newValue = parseInt(value.toString().replace(/\s/g, ''), 10);

            console.log('Setting second value', newValue)
            rangeSliderElement.noUiSlider.set([null, newValue]);
        }, 1200);

        inputs[0].addEventListener('input', () => {
            setFirstValue(inputs[0].value);
        });
        inputs[1].addEventListener('input', () => {
            setSecondValue(inputs[1].value);
        });



        inputsClearBtns[0].addEventListener('click', () => {
            rangeSliderElement.noUiSlider.set([min, null]);
        })
        inputsClearBtns[1].addEventListener('click', () => {
            rangeSliderElement.noUiSlider.set([null, max]);
        })
    });
}
