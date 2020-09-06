export default function FiltersButtonActivity() {
    const filters = document.querySelector('.js-filters');

    if (filters) {
        const submitBtn = filters.querySelector('button[type="submit"]');

        const inputs = Array.from(filters.querySelectorAll('input, select'));

        const filtersForm = filters.querySelector('form');

        const initialFormData = $(filtersForm).serialize();

        inputs.forEach(input => {
            input.addEventListener('change', () => {
                const newFormData = $(filtersForm).serialize();

                console.log('Old form data', initialFormData);
                console.log('New form data', newFormData);

                if (initialFormData === newFormData) {

                    console.log('Initial form data equal to the new form data')
                  
                    submitBtn.setAttribute('disabled', '');
                } else {

                    console.log('Initial form data not equal to the new form data')
                    submitBtn.removeAttribute('disabled');
                }

                // const filledInputs = inputs.filter(element => {
                //     if (element.matches('select')) {
                //         return element.value
                //     } else if (element.matches('input[type="checkbox"], input[type="radio"]')) {
                //         return element.checked
                //     } else {
                //         return element.value && element.value != 0;
                //     }
                // });

                // if (filledInputs.length) {
                //     submitBtn.removeAttribute('disabled');
                // } else {
                //     submitBtn.setAttribute('disabled', "");
                // }

                // console.log('Filled inputs', filledInputs)
            });
        });
    }
}




