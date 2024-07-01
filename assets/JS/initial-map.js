document.addEventListener("DOMContentLoaded", function () {
    // Инициализация карты
    var map = L.map('map').setView([43.1155, 131.8855], 4); // Центрируем карту на Владивосток, Россия

    // Добавляем слой карты OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Загружаем данные из date.json
    fetch('assets/data/date.json')
        .then(response => response.json())
        .then(data => {
            data.dates.forEach(event => {
                // Добавляем метку для каждого события
                L.marker([event.latitude, event.longitude]).addTo(map)
                    .bindPopup(`<b>${event.name}</b><br>${event.description}`);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
