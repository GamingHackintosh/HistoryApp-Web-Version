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

    fetch('assets/data.json')
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
            const dateHeading = document.createElement('h4');
            dateHeading.textContent = item.date;
            resultWrapper.appendChild(dateHeading);

            // Создаем и добавляем описание события
            const eventParagraph = document.createElement('p');
            eventParagraph.textContent = item.event;
            resultWrapper.appendChild(eventParagraph);

            // Добавляем обертку с датой и описанием в контейнер результатов
            resultsContainer.appendChild(resultWrapper);
        });

        // Показываем контейнер результатов
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.textContent = 'Ничего не найдено. Попробуйте изменить запрос.';
        // Показываем контейнер с сообщением об отсутствии результатов
        resultsContainer.style.display = 'block';
    }
}
