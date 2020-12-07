import Pikaday from 'pikaday';

export default function Datepicker() {

  

    const elements = Array.from(document.querySelectorAll('.js-datepicker-input'));
    
    console.log('Datepicker script', elements)

    elements.forEach(dateInput => {
        console.log('Date input', dateInput)
        new Pikaday({
            field: dateInput,
            format: 'DD.MM.YYYY',
            maxDate: new Date(),
            yearRange: 100,
            container: dateInput.parentElement,
            showDaysInNextAndPreviousMonths: true,
            i18n: {
                previousMonth : 'Предыдущий месяц',
                nextMonth     : 'Следующий месяц',
                months        : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                weekdays      : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
                weekdaysShort : ['вс','пн','вт','ср','чт','пт','сб']
            }
        });
    })
    
}
