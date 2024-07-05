document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('main .section');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const results = document.getElementById('results');
    const errorMessage = document.getElementById('error-message');

    // Функция для отображения активной секции
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'flex';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Функция для установки активного класса на выбранную ссылку
    function setActiveLink(link) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    }

    // Добавление события клика на элементы навигации
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            setActiveLink(this);
        });
    });

    // Изначально отображаем галерею
    showSection('gallery');

    // Функция для поиска
    searchBtn.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query) {
            // Здесь добавьте ваш код для поиска
            results.style.display = 'block';
            errorMessage.style.display = 'none';
            results.innerHTML = `Результаты поиска для: ${query}`;
        } else {
            results.style.display = 'none';
            errorMessage.style.display = 'contents';
            errorMessage.innerHTML = 'Введите ключевое слово для поиска.';
        }
    });
});
