export default function ModalReviewsRating() {
    const elements = Array.from(document.querySelectorAll('.js-modals-reviews-rating'));

    elements.forEach(element => {
        const input = element.querySelector('.js-modals-reviews-rating-input');
        const btns = Array.from(element.querySelectorAll('.modals__modal-reviews-form-main-rating-btn'));
        if (!input) {
            console.error('No input');
            return;
        }

        btns.forEach((btn, btnIndex) => {

            btn.addEventListener('click', event => {
                event.preventDefault();
                btns.forEach((otherBtn, otherBtnIndex) => {
                    if (otherBtnIndex <= btnIndex) {
                        otherBtn.classList.add('active');
                    } else {
                        otherBtn.classList.remove('active');
                    }
                });
    
                input.value = btnIndex + 1;
            })
          
        })
    })
}