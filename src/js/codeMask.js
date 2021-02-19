import Inputmask from 'inputmask';

export default function CodeMask() {
    const elements = Array.from(document.querySelectorAll('.js-code-mask'));

    elements.forEach(input => {
        const instance = new Inputmask({ mask: '(999) 999-99-99' });
        instance.mask(input);
    })
}