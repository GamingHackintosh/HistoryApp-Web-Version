export function fetchData(setEventsData, setErrorMessage) {
  fetch(process.env.PUBLIC_URL + "/assets/json/date.json")
    .then(response => response.json())
    .then(data => {
      setEventsData(data);
    })
    .catch((error) => {
      setErrorMessage('Ошибка загрузки данных.');
    });
}

export function displayEventsForKeyword(data, keyword, resultsContainer, errorMessage) {
    resultsContainer.innerHTML = '';
    errorMessage.style.display = 'none';
    resultsContainer.style.display = 'block';

    const filteredEvents = data.filter(event => {
      const keywordsArray = event.keywords ? event.keywords.toLowerCase().split(',').map(k => k.trim()) : [];
      return keywordsArray.includes(keyword.toLowerCase());
  });
  

    if (filteredEvents.length > 0) {
        filteredEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Дата:</strong> ${event.date}</p>
        `;
        resultsContainer.appendChild(eventElement);
        });
    } else {
        resultsContainer.innerHTML = '<p id="not-found">Событий по данному запросу не найдено.</p>';
    }
}

export function displayRandomEvent(data, resultsContainer, errorMessage) {
    // Проверка на наличие данных
    if (!data || data.length === 0) {
      resultsContainer.innerHTML = '';
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Нет доступных событий для отображения.';
      return;
    }
  
    resultsContainer.innerHTML = '';
    errorMessage.style.display = 'none';
    resultsContainer.style.display = 'block';
  
    // Выбираем случайное событие
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomEvent = data[randomIndex];
  
    // Проверка на существование события
    if (randomEvent && randomEvent.title && randomEvent.date) {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `
        <h3>${randomEvent.title}</h3>
        <p><strong>Дата:</strong> ${randomEvent.date}</p>
      `;
      resultsContainer.appendChild(eventElement);
    } else {
      resultsContainer.innerHTML = '<p id="error-message">Не удалось найти случайное событие.</p>';
    }
  }
  