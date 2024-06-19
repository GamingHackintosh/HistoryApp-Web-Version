document.getElementById('menu-icon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-370px';
        this.style.left = '0';
    } else {
        sidebar.style.left = '0';
        this.style.left = '370px';
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const resultsContainer = document.getElementById("results");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    let eventsData = [];

    // Загружаем данные из date.json
    fetch("assets/date.json")
        .then(response => response.json())
        .then(data => {
            eventsData = data;
            sidebar.addEventListener("click", (event) => {
                if (event.target.tagName === "A" && event.target.dataset.century) {
                    event.preventDefault();
                    const century = event.target.dataset.century;
                    displayEventsForCentury(eventsData, century);
                }
            });

            searchBtn.addEventListener("click", () => {
                const keyword = searchInput.value.trim().toLowerCase();
                displayEventsForKeyword(eventsData, keyword);
            });
        });

    function displayEventsForCentury(data, century) {
        // Очищаем предыдущие результаты
        resultsContainer.innerHTML = "";

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
            resultsContainer.innerHTML = "<p>Событий для этого века не найдено.</p>";
        }
    }

    function displayEventsForKeyword(data, keyword) {
        // Очищаем предыдущие результаты
        resultsContainer.innerHTML = "";

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
            resultsContainer.innerHTML = "<p>Событий по данному запросу не найдено.</p>";
        }
    }
});
