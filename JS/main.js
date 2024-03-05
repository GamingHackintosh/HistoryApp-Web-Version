document.getElementById('search-btn').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    console.log("Начало поиска: ", searchValue); // Для отладки

    fetch('data.json') // Проверка на правильность пути
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Данные получены: ", data); // Для отладки
            const filteredData = data.filter(item =>
                item.keywords.toLowerCase().includes(searchValue) ||
                item.date.includes(searchValue)
            );
            console.log("Фильтрованные данные: ", filteredData); // Для отладки
            displayResults(filteredData);
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке data.json: ', error);
        });
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.date}: ${item.event}`;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.textContent = 'Ничего не найдено. Попробуйте изменить запрос.';
    }
}
