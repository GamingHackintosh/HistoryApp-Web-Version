const slider = document.querySelector('.slider-wrapper');
const leftButton = document.querySelector('.scroll-left');
const rightButton = document.querySelector('.scroll-right');
const collagePhotos = document.querySelectorAll('.collage-photo');
const photoWidth = collagePhotos[0].offsetWidth + parseFloat(getComputedStyle(collagePhotos[0]).marginRight);
let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    scrollPosition -= photoWidth * 4; // Прокручиваем на 4 карточки
    if (scrollPosition < 0) scrollPosition = 0;
    slider.style.transform = `translateX(-${scrollPosition}px)`;
});

rightButton.addEventListener('click', () => {
    scrollPosition += photoWidth * 4; // Прокручиваем на 4 карточки
    if (scrollPosition > (photoWidth * (collagePhotos.length - 4))) {
        scrollPosition = photoWidth * (collagePhotos.length - 4);
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
});
