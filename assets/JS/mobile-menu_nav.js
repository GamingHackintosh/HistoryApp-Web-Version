document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', function(event) {
    var navMenu = document.getElementById('nav-menu');
    var menuToggle = document.getElementById('mobile-menu-toggle');
    
    // Проверяем, что клик произошел вне меню и кнопки
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
