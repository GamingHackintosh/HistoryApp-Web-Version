document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const collage = document.querySelector('.collage');

    const scrollAmount = () => {
        const photoWidth = document.querySelector('.collage-photo').offsetWidth;
        return photoWidth; // Прокручиваем на одну карточку
    };

    scrollLeftBtn.addEventListener('click', () => {
        collage.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        collage.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth'
        });
    });
});
