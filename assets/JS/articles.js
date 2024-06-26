document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');
    const openModalButtons = document.querySelectorAll('.open-modal');

    // Данные статей
    const articles = {
        1: {
            title: 'Статья 1: Заголовок статьи',
            description: 'Полное описание статьи 1. Здесь можно написать все детали и важные моменты, которые нужно осветить.'
        },
        2: {
            title: 'Статья 2: Заголовок статьи',
            description: 'Полное описание статьи 2. Здесь можно написать все детали и важные моменты, которые нужно осветить.'
        },
        3: {
            title: 'Статья 3: Заголовок статьи',
            description: 'Полное описание статьи 3. Здесь можно написать все детали и важные моменты, которые нужно осветить.'
        },
        4: {
            title: 'Статья 4: Заголовок статьи',
            description: 'Полное описание статьи 4. Здесь можно написать все детали и важные моменты, которые нужно осветить.'
        }
    };

    // Открытие модального окна
    openModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            modalTitle.innerText = articles[articleId].title;
            modalDescription.innerText = articles[articleId].description;
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
