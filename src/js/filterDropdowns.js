export default function FilterDropdowns() {
    const elements = Array.from(document.querySelectorAll('.js-filters-dropdown'));

    elements.forEach(element => {
        const btn = element.querySelector('.filters__select-group-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();

            

            if (!element.classList.contains('active')) {
                elements.forEach(element => element.classList.remove('active'))
                element.classList.add('active');
                
            } else {
                elements.forEach(element => element.classList.remove('active'))
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
