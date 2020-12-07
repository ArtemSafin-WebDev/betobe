export default function EditCompetencies() {
    const elements = Array.from(document.querySelectorAll('.js-edit-competencies'));


    elements.forEach(element => {
        const items = Array.from(element.querySelectorAll('.account__edit-competencies-list-item'));

        items.forEach(item => {
            const input = item.querySelector('input[type="hidden"]');
            const btns = Array.from(item.querySelectorAll('.account__edit-competencies-btn'));

            if (input.value && input.value != 0) {
                item.classList.add('active');
                btns.forEach((btn, btnIndex) => {
                    if (btnIndex < input.value) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                })
            }

            btns.forEach((btn, btnIndex) => {
                btn.addEventListener('click', event => {
                    event.preventDefault();
                    if (btnIndex + 1 == input.value) {
                        btns.forEach(otherBtn => otherBtn.classList.remove('active'))
                        item.classList.remove('active');
                        input.value = 0;
                    } else {
                        btns.forEach((otherBtn, otherBtnIndex) => {
                            if (otherBtnIndex <= btnIndex) {
                                otherBtn.classList.add('active');
                            } else {
                                otherBtn.classList.remove('active');
                            }
                        });
                        input.value = btnIndex + 1;
                        item.classList.add('active');
                    }
                })
            })
        })
    })
}