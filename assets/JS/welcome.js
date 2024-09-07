document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('welcome-popup');
    const closeBtn = document.getElementById('close-popup');

    // Функция для скрытия Popup`а
    function hidePopup() {
        popup.style.display = 'none';
        console.log('Popup скрыт'); // Лог для отладки
    }

    // Проверяем, был ли уже показан Popup
    const isPopupShown = localStorage.getItem('welcomePopupShown');
    console.log('Значение в localStorage welcomePopupShown:', isPopupShown); // Лог для проверки состояния

    // Убедимся, что Popup показывается только если в localStorage нет записи
    if (!isPopupShown || isPopupShown === 'false') {
        popup.style.display = 'flex'; // Показываем Popup
        console.log('Popup показан, так как значение welcomePopupShown не найдено или оно false');
    } else {
        popup.style.display = 'none'; // Явно скрываем Popup, если запись есть
        console.log('Popup не показан, значение welcomePopupShown = true');
    }

    // Когда пользователь нажимает на крестик, скрываем Popup и устанавливаем флаг в localStorage
    closeBtn.addEventListener('click', function() {
        hidePopup();
        localStorage.setItem('welcomePopupShown', 'true'); // Устанавливаем флаг после закрытия
        console.log('Флаг welcomePopupShown установлен в true');
    });

    // Также закрываем Popup, если пользователь кликнул за его пределы
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            hidePopup();
            localStorage.setItem('welcomePopupShown', 'true'); // Устанавливаем флаг после закрытия
            console.log('Флаг welcomePopupShown установлен в true после клика вне Popupа');
        }
    });
});
