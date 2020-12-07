import Inputmask from 'inputmask';

export default function DateInput() {
    const elements = Array.from(document.querySelectorAll('.js-date-input'));


    elements.forEach(element => {
        const instance = new Inputmask({ mask: '99.99.9999', placeholder: 'дд.мм.гггг' });
        instance.mask(element);
    })
}