document.getElementById('search-btn').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    console.log("Поиск по значению:", searchValue); // Для отладки
    fetch('../data.json') // Проверьте, что путь правильный
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Полученные данные:", data); // Для отладки
            const filteredData = data.filter(item => item.keywords.toLowerCase().includes(searchValue) || item.date.includes(searchValue));
            console.log("Отфильтрованные данные:", filteredData); // Для отладки
            displayResults(filteredData);
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке data.json:', error);
        });
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.date}: ${item.event}`;
        resultsContainer.appendChild(div);
    });
}
