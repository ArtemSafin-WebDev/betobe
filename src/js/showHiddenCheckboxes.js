export default function ShowHiddenCheckboxes() {
    const btns = Array.from(document.querySelectorAll('.js-show-hidden-checkboxes'));

    btns.forEach(btn => {
        let hidden = true;
        const originalText = btn.textContent;
        btn.addEventListener('click', event => {
            event.preventDefault();
            const container = btn.closest('.filters__area');
           
            if (!container) return;

            container.classList.toggle('show-hidden');
            hidden = !hidden;

            btn.textContent = hidden ? originalText : 'Скрыть';


        })
    })
}