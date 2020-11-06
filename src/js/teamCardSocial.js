import gsap from 'gsap';

export default function TeamCardSocial() {
    const elements = Array.from(document.querySelectorAll('.js-team-card-social'));

    elements.forEach(element => {
        const btn = element.querySelector('button');
        const contentContainer = element.querySelector('.team__card-social-content-wrapper');
        const socialItems = Array.from(element.querySelectorAll('.team__card-social-list-item'));
        let open = false;

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (!open) {
                element.classList.add('active');
                gsap.set(contentContainer, {
                    width: 'auto'
                });

                const tl = gsap.timeline();

                tl.from(contentContainer, {
                    width: 0,
                    duration: 0.4
                }).from(socialItems, {
                    autoAlpha: 0,
                    duration: 0.3,
                    stagger: 0.1
                }, '-=0.2');

                open = true;
            } else {
                element.classList.remove('active');

                const tl = gsap.timeline();

                tl.to(contentContainer, {
                    duration: 0.4,
                    width: 0
                });
                open = false;
            }
        });
    });
}
