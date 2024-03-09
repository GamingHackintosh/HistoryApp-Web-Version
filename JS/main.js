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



// Сайдбар
// Элементы для бокового меню и кнопки переключения
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-sidebar');
const closeButton = document.getElementById('close-sidebar');

// Добавляем слушатели событий на кнопки для управления sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Функция для заполнения sidebar веками и датами
function populateSidebar(centuriesData) {
    const menu = document.getElementById('centuries');
    // Очищаем меню перед добавлением новых элементов
    menu.innerHTML = '';

    centuriesData.forEach(century => {
        // Создаем элемент списка для века
        const centuryLi = document.createElement('li');
        centuryLi.textContent = century.name;
        menu.appendChild(centuryLi);

        // Добавляем события при клике на век
        centuryLi.addEventListener('click', () => {
            // Здесь будет ваш код для отображения событий данного века
            // Например, вызов функции displayEvents(century.events);
        });
    });
}

// Пример данных
const centuriesData = [
    { name: 'XVIII век', events: [...] },
    { name: 'XIX век', events: [...] }
    // ...
];

// Вызываем функцию для заполнения данных
populateSidebar(centuriesData);

// Сайдбар
