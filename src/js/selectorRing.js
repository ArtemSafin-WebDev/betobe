import { MOBILE_WIDTH } from './constants';
import Hammer from 'hammerjs';

export default function SelectorRing() {
    const rings = Array.from(document.querySelectorAll('.js-selector-ring'));

    rings.forEach(ring => {
        const inputs = Array.from(ring.querySelectorAll('.filters__selector-ring-inputs input'));

        const categoriesNames = Array.from(ring.querySelectorAll('.filters__selector-ring-categories-name'));

        const categories = Array.from(ring.querySelectorAll('.filters__selector-ring-category'));

        const resetBtn = document.querySelector('.js-selector-reset');

        if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
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
                                otherStep.classList.remove('preview-unchecked');
                            } else {
                                otherStep.classList.remove('preview-checked');
                                otherStep.classList.add('preview-unchecked');
                            }
                        });
                    });
                });

                category.addEventListener('mouseleave', () => {
                    steps.forEach(step => {
                        step.classList.remove('preview-checked');
                        step.classList.remove('preview-unchecked');
                    });
                });
            });

            if (resetBtn) {
                resetBtn.addEventListener('click', event => {
                    event.preventDefault();
                    inputs.forEach(input => (input.value = 0));
                    categoriesNames.forEach(name => name.classList.remove('active'));
                    Array.from(ring.querySelectorAll('.filters__selector-ring-category path')).forEach(element =>
                        element.classList.remove('checked')
                    );
                });
            }
        } else {
            categoriesNames.forEach(category => {
                const categoryName = category.getAttribute('data-cat');
                const handle = category.querySelector('.filters__selector-ring-categories-handle');
                const input = inputs.find(element => element.name === categoryName);

                const scoreBtns = Array.from(category.querySelectorAll('.filters__selector-ring-categories-name-score-btn'));

                const setScore = score => {

                    if (score > 5) {
                        score = 5;
                    }

                    if (score < 0) {
                        score = 0;
                    }
                    scoreBtns.forEach((btn, btnIndex) => {
                        if (btnIndex < score) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                    input.value = score;

                    const changeEvent = new Event('change');

                    input.dispatchEvent(changeEvent);

                    category.style.setProperty('--score', score);
                };

                if (input.value) {
                    setScore(input.value);
                }

                scoreBtns.forEach((btn, btnIndex) => {
                    btn.addEventListener('click', event => {
                        event.preventDefault();

                        setScore(btnIndex + 1);
                    });
                });

                ring.addEventListener('reset', () => {
                    setScore(0);
                });

                if (handle) {
                    var hammertime = new Hammer(handle);
                    // console.log('One section width', scoreBtns[0].offsetWidth)

                    let startX = 0;
                    hammertime.on('panstart', function(event) {
                        startX = handle.offsetLeft;
                    });
                    hammertime.on('panmove', function(event) {
                        // console.log('Delta X', event.deltaX);
                        // console.log('Start x', startX)

                        const score = Math.floor((startX + event.deltaX) / scoreBtns[0].offsetWidth);
                        // console.log('Current score', score)

                        setScore(score)
                    });
                }
            });

            if (resetBtn) {
                resetBtn.addEventListener('click', event => {
                    event.preventDefault();

                    const resetEvent = new CustomEvent('reset');

                    ring.dispatchEvent(resetEvent);
                });
            }
        }
    });
}
