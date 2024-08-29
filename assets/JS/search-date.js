document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar-1");
    const resultsContainer = document.getElementById("results");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchForm = document.querySelector(".search-form form");
    const randomEventBtn = document.getElementById("random-event-btn");
    const errorMessage = document.getElementById("error-message");
    const centuryFilter = document.getElementById("century-filter");

    let eventsData = [];

    // Загружаем данные из date.json
    fetch("assets/json/date.json")
        .then(response => response.json())
        .then(data => {
            eventsData = data;

            // Обработчик для кликов по меню в сайдбаре
            sidebar.addEventListener("click", (event) => {
                if (event.target.tagName === "A" && event.target.dataset.century) {
                    event.preventDefault();
                    const century = event.target.dataset.century;
                    displayEventsForCentury(eventsData, century);
                }
            });

            // Обработчик для кнопки поиска
            searchBtn.addEventListener("click", () => {
                const keyword = searchInput.value.trim().toLowerCase();
                if (keyword === "") {
                    displayErrorMessage("Поле ввода не может быть пустым.");
                } else {
                    displayEventsForKeyword(eventsData, keyword);
                }
            });

            // Обработчик для кнопки случайного события
            randomEventBtn.addEventListener("click", () => {
                displayRandomEvent(eventsData);
            });
        });

    function displayEventsForCentury(data, century) {
        // Очищаем предыдущие результаты и скрываем сообщение об ошибке
        resultsContainer.innerHTML = "";
        errorMessage.style.display = "none"; 
        resultsContainer.style.display = "block"; 

        // Фильтруем события по веку
        const filteredEvents = data.filter(event => event.century === century);

        if (filteredEvents.length > 0) {
            filteredEvents.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.classList.add("event");
                eventElement.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>Дата:</strong> ${event.date}</p>
                `;
                resultsContainer.appendChild(eventElement);
            });
        } else {
            resultsContainer.innerHTML = '<p id="error-message">Поле ввода не может быть пустым.</p>';
        }
    }

    function displayEventsForKeyword(data, keyword) {
        // Очищаем предыдущие результаты и скрываем сообщение об ошибке
        resultsContainer.innerHTML = "";
        errorMessage.style.display = "none"; 
        resultsContainer.style.display = "block"; 
    
        // Фильтруем события по ключевому слову
        const filteredEvents = data.filter(event => event.keywords.toLowerCase().includes(keyword));
    
        if (filteredEvents.length > 0) {
            filteredEvents.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.classList.add("event");
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

    // Новая функция для отображения случайного события
    function displayRandomEvent(data) {
        // Очищаем предыдущие результаты и скрываем сообщение об ошибке
        resultsContainer.innerHTML = "";
        errorMessage.style.display = "none"; 
        resultsContainer.style.display = "block"; 

        // Выбираем случайное событие
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomEvent = data[randomIndex];

        // Создаем элемент для случайного события
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
            <h3>${randomEvent.title}</h3>
            <p><strong>Дата:</strong> ${randomEvent.date}</p>
        `;
        resultsContainer.appendChild(eventElement);
    }

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const keyword = searchInput.value.trim().toLowerCase();
        const selectedCentury = centuryFilter.value;

        if (keyword === "" && selectedCentury === "") {
            displayErrorMessage("Пожалуйста, введите ключевое слово или выберите век.");
        } else {
            // Вызов функции для поиска и отображения событий
            displayFilteredEvents(eventsData, keyword, selectedCentury);
        }
    });

    function displayErrorMessage(message) {
        // Очищаем контейнер результатов
        resultsContainer.innerHTML = "";
        resultsContainer.style.display = "none"; // Скрываем блок результатов
        errorMessage.textContent = message;
        errorMessage.style.display = "block"; // Показываем сообщение об ошибке
    }

    function displayFilteredEvents(data, keyword, century) {
        resultsContainer.innerHTML = "";
        errorMessage.style.display = "none";
        resultsContainer.style.display = "block";

        const filteredEvents = data.filter(event => {
            const keywordMatch = keyword === "" || event.keywords.toLowerCase().includes(keyword);
            const centuryMatch = century === "" || event.century === century;
            return keywordMatch && centuryMatch;
        });

        if (filteredEvents.length > 0) {
            filteredEvents.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.classList.add("event");
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
});
