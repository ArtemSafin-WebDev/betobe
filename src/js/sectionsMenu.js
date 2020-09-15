import { debounce } from 'lodash'

export default function SectionsMenu() {
    const elements = Array.from(document.querySelectorAll('.js-sections-menu'));

    elements.forEach(element => {
        const sectionsMenuLinks = Array.from(element.querySelectorAll('.js-sections-menu-link'));
       

        const items = sectionsMenuLinks.map(link => {
            const id = link.hash.replace('to-', '');
            const correspondingSection = document.querySelector(id);
            const blockStart = Math.floor(correspondingSection.getBoundingClientRect().top + window.scrollY);
            const blockEnd = blockStart + correspondingSection.offsetHeight;
            return {
                link,
                id,
                correspondingSection,
                blockStart,
                blockEnd
            };
        });

        window.addEventListener('resize', debounce(() => {
            console.log('Debounced resize')
            items.forEach(item => {
                item.blockStart = Math.floor(item.correspondingSection.getBoundingClientRect().top + window.scrollY);
                item.blockEnd = item.blockStart + item.correspondingSection.offsetHeight;
            });
        }, 150));

       

        let startPos = window.pageYOffset;

        function setActiveItem() {
            const currentCheckingDistance = startPos + window.innerHeight / 2;
            // console.log('Current checking distance', currentCheckingDistance)
            const itemsAfterScrollPosition = items.filter(item => (currentCheckingDistance >= item.blockStart ) && (currentCheckingDistance <= item.blockEnd));

            items.forEach(item => item.link.classList.remove('active-section'));

            itemsAfterScrollPosition.length && itemsAfterScrollPosition[0].link.classList.add('active-section');

            // console.log('Items after scroll position', itemsAfterScrollPosition);
        }

        function writeLayout() {
           
            setActiveItem();
        }

        window.addEventListener(
            'scroll',
            () => {
                let newPos = window.pageYOffset;

                if (startPos !== newPos) {
                    requestAnimationFrame(writeLayout);
                }

                startPos = newPos;
            },
            false
        );
    });
}
