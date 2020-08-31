

export default function FiltersButtonActivity() {
    const filters = document.querySelector('.js-filters');

    if (filters) {
        const submitBtn = filters.querySelector('button[type="submit"]');

        const inputs = Array.from(filters.querySelectorAll('input, select'));


        inputs.forEach(input => {
            input.addEventListener('change', () => {
                submitBtn.removeAttribute('disabled');
            })
        })
    }

   
}