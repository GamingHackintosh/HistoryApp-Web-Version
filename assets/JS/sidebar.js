// Сайдбар

// Функция для преобразования года в век
function yearToCentury(year) {
    return Math.ceil(year / 100);
}

// Функция для отображения событий по ключевому слову века
function displayEventsForKeyword(keyword) {
    fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        // Фильтруем события, содержащие ключевое слово в свойстве keywords
        const eventsForKeyword = data.filter(event => event.keywords.includes(keyword));
        // Отображаем события, соответствующие ключевому слову
        displayResults(eventsForKeyword);
    })
    .catch(error => console.error('Ошибка при загрузке данных: ', error));
}


// Функция для отображения результатов в контейнере результатов
function displayResults(events) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.innerHTML = `<h4>${event.date}</h4><p>${event.event}</p>`;
        resultsContainer.appendChild(eventElement);
    });
}

// Добавляем новую функцию для отображения событий "До нашей эры"
function displayBeforeCenturyEvents() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Фильтруем события, содержащие "до н. э." в свойстве date
        const beforeCenturyEvents = data.filter(event => event.date.includes('до н. э.'));
        // Отображаем события "До нашей эры"
        displayResults(beforeCenturyEvents);
    })
    .catch(error => console.error('Ошибка при загрузке данных: ', error));
}

// Обработчик событий на клики по ссылкам веков после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const centuryLinks = document.querySelectorAll('.list_menu a');
    
    centuryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const century = link.getAttribute('data-century').trim();
            if (century === "1") { // Если это ссылка "До нашей эры"
                displayBeforeCenturyEvents();
            } else {
                const centuryText = century + " век"; 
                displayEventsForKeyword(centuryText);
            }
        });
    });
});


// Скрываем контейнер результатов по умолчанию
document.getElementById('results').classList.add('hidden');

// Функция для отображения результатов в контейнере результатов
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    // Если есть результаты, показываем контейнер и заполняем его
    if (results.length > 0) {
        resultsContainer.classList.remove('hidden'); // Убираем класс 'hidden', делаем видимым
        resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты
        // Создаем HTML для каждого результата и добавляем в контейнер
        results.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event';
            eventElement.innerHTML = `<h4>${event.date}</h4><p>${event.event}</p>`;
            resultsContainer.appendChild(eventElement);
        });
    } else {
        resultsContainer.classList.add('hidden'); // Если результатов нет, скрываем контейнер
        resultsContainer.innerHTML = 'Ничего не найдено. Попробуйте изменить запрос.';
    }
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-content').classList.toggle('active');
});
