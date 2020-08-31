

export default function SelectorRing() {
    const rings = Array.from(document.querySelectorAll('.js-selector-ring'));

    rings.forEach(ring => {
        const inputs = Array.from(ring.querySelectorAll('.filters__selector-ring-inputs input'));

        const categoriesNames = Array.from(ring.querySelectorAll('.filters__selector-ring-categories-name'));

        const categories = Array.from(ring.querySelectorAll('.filters__selector-ring-category'));

        categories.forEach(category => {
            const steps = Array.from(category.querySelectorAll('path'));

            steps.forEach((step, stepIndex) => {
                step.addEventListener('click', event => {
                    event.preventDefault();
                    steps.forEach((otherStep, otherStepIndex) => {
                        if (otherStepIndex >= stepIndex) {
                            otherStep.classList.add('checked');
                        } else {
                            otherStep.classList.remove('checked');
                        }
                    });

                    const categoryName = category.getAttribute('data-cat');

                    const input = inputs.find(element => element.name === categoryName);

                    if (input) {
                        input.value = steps.length - stepIndex;

                        const event = new Event('change');

                        input.dispatchEvent(event);
                    }

                    const name = categoriesNames.find(element => element.getAttribute('data-cat') === categoryName);



                    if (name) name.classList.add('active');

                    console.log(`Rating in category ${categoryName} is ${steps.length - stepIndex}`);
                });
                step.addEventListener('mouseenter', event => {
                    event.preventDefault();
                    steps.forEach((otherStep, otherStepIndex) => {
                        if (otherStepIndex >= stepIndex) {
                            otherStep.classList.add('preview-checked');
                            otherStep.classList.remove('preview-unchecked')
                        } else {
                            otherStep.classList.remove('preview-checked');
                            otherStep.classList.add('preview-unchecked')
                        }
                    });
                });
            });


            category.addEventListener('mouseleave', () => {
                steps.forEach(step => {
                    step.classList.remove('preview-checked')
                    step.classList.remove('preview-unchecked')
                });
            })
        });


        const resetBtn = document.querySelector('.js-selector-reset');

        if (resetBtn) {
            resetBtn.addEventListener('click', event => {
                event.preventDefault();
                inputs.forEach(input => input.value = 0);
                categoriesNames.forEach(name => name.classList.remove('active'));
                Array.from(ring.querySelectorAll('.filters__selector-ring-category path')).forEach(element => element.classList.remove('checked'))
            })
        }
    });
}
