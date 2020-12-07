export default function LoadAccountImages() {
    const changeBgInputs = Array.from(document.querySelectorAll('.js-change-bg-input'));

    changeBgInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.files && input.files[0]) {
                const file = input.files[0];

                if (file.type && file.type.indexOf('image') === -1) {
                    console.log('File is not an image.', file.type, file);
                    return;
                }
            
                const reader = new FileReader();
                reader.addEventListener('load', event => {
                    const src = event.target.result;
                    const headerBg = document.querySelector('.account-header__bg');
                    const headerImg = headerBg.querySelector('.account-header__bg-image');
                    if (!headerImg) {
                        const img = document.createElement('img');
                        img.className = 'account-header__bg-image';
                        img.src = src;
                        headerBg.appendChild(img);
                    } else {
                        headerImg.src = src;
                    }
                });
                reader.readAsDataURL(file);
            }
        })
    })


    const loadProfilePhotoInputs = Array.from(document.querySelectorAll('.js-load-profile-photo'));

    loadProfilePhotoInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.files && input.files[0]) {
                const file = input.files[0];

                if (file.type && file.type.indexOf('image') === -1) {
                    console.log('File is not an image.', file.type, file);
                    return;
                }
            
                const reader = new FileReader();
                reader.addEventListener('load', event => {
                    const src = event.target.result;
                    const photoContainer = document.querySelector('.account__photo-container');
                    const photoImage = photoContainer.querySelector('.account__photo-container-image');
                    if (!photoImage) {
                        const img = document.createElement('img');
                        img.className = 'account__photo-container-image';
                        img.src = src;
                        photoContainer.appendChild(img);
                        photoContainer.classList.add('photo-loaded');
                    } else {
                        photoImage.src = src;
                    }
                });
                reader.readAsDataURL(file);
            }
        })
    })
}
