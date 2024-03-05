document.getElementById('search-btn').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => item.keywords.toLowerCase().includes(searchValue) || item.date.includes(searchValue));
            displayResults(filteredData);
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
