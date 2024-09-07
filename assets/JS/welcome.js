document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('welcome-popup');
    const closeBtn = document.getElementById('close-popup');

    // Функция для скрытия попапа
    function hidePopup() {
        popup.style.display = 'none';
    }

    // Проверяем, был ли уже показан попап
    if (!localStorage.getItem('welcomePopupShown')) {
        // Показываем попап при первом посещении
        popup.style.display = 'flex';
    }

    // Когда пользователь нажимает на крестик, скрываем попап и сохраняем в localStorage
    closeBtn.addEventListener('click', function() {
        hidePopup();
        localStorage.setItem('welcomePopupShown', 'true'); // Устанавливаем флаг, что попап был закрыт
    });

    // Также закрываем попап, если пользователь кликнул за его пределы
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            hidePopup();
            localStorage.setItem('welcomePopupShown', 'true');
        }
    });
});
