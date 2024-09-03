document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('welcome-popup');
    var closePopup = document.getElementById('close-popup');

    if (localStorage.getItem('welcomePopupShown') !== 'true') {
        popup.style.display = 'flex';
    }

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
        localStorage.setItem('welcomePopupShown', 'true');
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            localStorage.setItem('welcomePopupShown', 'true');
        }
    });
});
