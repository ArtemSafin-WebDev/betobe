export default function OnlyNumeric() {
    const onlyNumericInputs = Array.from(document.querySelectorAll('.js-numeric-input'));

    onlyNumericInputs.forEach(input => {
    
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g,''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue.toLocaleString();
            }
        })
       
    })


    const onlyNumericInputsNoFormatting = Array.from(document.querySelectorAll('.js-numeric-input-no-formatting'));
    onlyNumericInputsNoFormatting.forEach(input => {
    
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g,''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue;
            }
        
        })
       
    })
}