// Обработчик событий при нажатии на кнопку
document.getElementById('search-btn').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    // Проверяем, не пустое ли поле поиска
    if (!searchValue) {
        alert("Поле пусто");
        return;
    }
    
    // Проверяем, что введенное значение не состоит из одной цифры или одиночной буквы
    if (searchValue.length < 3) {
        // Если это одиночная цифра или буква, не выполняем поиск
        console.log("Поиск одиночных символов или пар символов не поддерживается.");
        return;
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




// Сайдбар

// Функция для преобразования года в век
function yearToCentury(year) {
    return Math.ceil(year / 100);
}

// Функция для отображения событий по ключевому слову века
function displayEventsForKeyword(keyword) {
    fetch('data.json')
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

// Устанавливаем обработчики событий на клики по ссылкам веков после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const centuryLinks = document.querySelectorAll('.list_menu a');

    centuryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const centuryText = link.getAttribute('data-century').trim() + "век"; 
            displayEventsForKeyword(centuryText);
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