export default function EditName() {
    const elements = Array.from(document.querySelectorAll('.js-edit-name'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const input = element.closest('.account__intro-name').querySelector('.account__intro-name-input');
            element.classList.toggle('active');
            if (input.hasAttribute('readonly')) {
                input.removeAttribute('readonly')
                input.focus();
            } else {
                input.setAttribute('readonly', '');
            }
        })
    })
}