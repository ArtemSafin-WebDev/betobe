export default function FilterDropdowns() {
    const elements = Array.from(document.querySelectorAll('.js-filters-dropdown'));

    elements.forEach(element => {
        const btn = element.querySelector('.filters__select-group-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();

            elements.forEach(element => element.classList.remove('active'))

            if (!element.classList.contains('active')) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });


        document.addEventListener('click', event => {
            const insideGroup = event.target.matches('.filters__select-group') || event.target.closest('.filters__select-group');
            // const insideButton = event.target.matches('.filters__select-group-btn') || event.target.closest('.filters__select-group-btn');
            if (!insideGroup) {
                elements.forEach(element => element.classList.remove('active'))
            } 
        });
    });
}
