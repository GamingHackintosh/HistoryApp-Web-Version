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
const centuriesData = {
    'VIII': [{'date': '720', 'event': 'Событие 1 в VIII веке'}, {'date': '725', 'event': 'Событие 2 в VIII веке'}],
    'IX': [{'date': '810', 'event': 'Событие 1 в IX веке'}],
    'X': [{'date': '950', 'event': 'Событие 1 в X веке'}],
    // Добавьте дополнительные данные по аналогии
};
document.addEventListener('DOMContentLoaded', function() {
    const sidebarElement = document.querySelector('.SideBar');
    const ul = document.createElement('ul');
    ul.id = 'centuries';

    for (let century in centuriesData) {
        const li = document.createElement('li');
        li.textContent = century + ' век';
        li.onclick = function() { displayEventsForCentury(century); };
        ul.appendChild(li);
    }

    sidebarElement.appendChild(ul);
});

function initSidebar() {
    const centuriesElement = document.getElementById('centuries');
    centuries.forEach(century => {
        const li = document.createElement('li');
        li.textContent = century + ' век';
        li.addEventListener('click', () => displayEventsForCentury(century));
        centuriesElement.appendChild(li);
    });
}

function displayEventsForCentury(century) {
    const events = centuriesData[century];
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = ''; // Очистить текущие события

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.textContent = `${event.date}: ${event.event}`;
        resultsElement.appendChild(eventElement);
    });
}

document.addEventListener('DOMContentLoaded', initSidebar);
