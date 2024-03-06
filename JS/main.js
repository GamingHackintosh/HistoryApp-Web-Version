// Обработчик событий при нажатии на кнопку
document.getElementById('search-btn').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    // Проверяем, не пустое ли поле поиска
    if (!searchValue.trim()) {
        alert("Поле пусто"); // Можно заменить alert на другой способ уведомления пользователя
        return; // Прерываем выполнение функции, если поле пусто
    }
    
    // Проверяем, что введенное значение не является только годом
    const isYearQuery = searchValue.endsWith('гг.') || searchValue.endsWith('г.') || searchValue.endsWith('г') || searchValue.endsWith('.');

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Если запрос не содержит только год, фильтруем данные
            const filteredData = isYearQuery ? [] : data.filter(item =>
                item.keywords.toLowerCase().includes(searchValue)
            );
            displayResults(filteredData);
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке data.json: ', error);
        });
});

// Обработчик событий для появления результата
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(item => {
            // Создаем обертку для каждого результата
            const resultWrapper = document.createElement('div');
            resultWrapper.className = 'result-wrapper';

            // Создаем и стилизуем элемент даты
            const dateBadge = document.createElement('div');
            dateBadge.textContent = item.date;
            dateBadge.className = 'date-badge';
            resultWrapper.appendChild(dateBadge);

            // Создаем и добавляем описание события
            const eventDescription = document.createElement('div');
            eventDescription.textContent = item.event;
            resultWrapper.appendChild(eventDescription);

            // Добавляем обертку с датой и описанием в контейнер результатов
            resultsContainer.appendChild(resultWrapper);
        });
    } else {
        resultsContainer.textContent = 'Ничего не найдено. Попробуйте изменить запрос.';
    }
}




/* Фильтр ключевых слов */
const filteredData = data.filter(item =>
    item.keywords.toLowerCase().includes(searchValue) ||
    item.date.includes(searchValue)
);


// Автоматическое переключения слайдов
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Переключение каждые 5 секунд
    setInterval(nextSlide, 5000);
});
