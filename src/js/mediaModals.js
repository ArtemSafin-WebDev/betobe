export default function MediaModals() {
    $('[data-fancybox]').fancybox({
        hash: false,
        backFocus: false,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        }
    });
}
