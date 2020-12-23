export default function ChatAndNotifications() {
    const notificationsBtn = document.querySelector('.page-header__notifications-button');
    const chatBtn = document.querySelector('.page-header__chat-button');
    const chatClose = document.querySelector('.page-header__chat-close');
    let notificationsOpen = false;
    let chatOpen = false;

    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', event => {
            event.preventDefault();
            if (!notificationsOpen) {
                notificationsBtn.parentElement.classList.add('active');
                notificationsOpen = true;

                if (chatOpen) {
                    chatBtn.parentElement.classList.remove('active');
                    chatOpen = false;
                }
            } else {
                notificationsBtn.parentElement.classList.remove('active');
                notificationsOpen = false;
            }
        });
    }



    if (chatBtn) {
        chatBtn.addEventListener('click', event => {
            event.preventDefault();
            if (!chatOpen) {
                chatBtn.parentElement.classList.add('active');
                chatOpen = true;


                if (notificationsOpen) {
                    notificationsBtn.parentElement.classList.remove('active');
                    notificationsOpen = false;
                }
            } else {
                chatBtn.parentElement.classList.remove('active');
                chatOpen = false;
            }
        });
    }


    if (chatClose) {
        chatClose.addEventListener('click', event => {
            event.preventDefault();
            if (chatOpen) {
                chatBtn.parentElement.classList.remove('active');
                chatOpen = false;
            }
        })
    }


    document.addEventListener('click', event => {
        const insideChat = event.target.matches('.page-header__chat') || event.target.closest('.page-header__chat');
        const insideNotifications = event.target.matches('.page-header__notifications') || event.target.closest('.page-header__notifications');

        if (insideNotifications || insideChat) {
            return;
        } else {

            if (chatOpen && notificationsBtn && chatBtn) {
                chatBtn.parentElement.classList.remove('active');
                chatOpen = false;
                notificationsBtn.parentElement.classList.remove('active');
                notificationsOpen = false;
            }
        }
    })
}
