document.addEventListener("DOMContentLoaded", function () {
    // Инициализация карты
    var map = L.map('map').setView([43.1155, 131.8855], 4); // Центрируем карту на Владивосток, Россия

    // Добавляем слой карты OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Функция для загрузки JSON данных
    function loadJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(null);
    }

    // Загрузка данных из date.json
    loadJSON('assets/json/date.json', function (data) {
        // Добавляем метки на карту
        data.forEach(event => {
            if (event.location && event.location.latitude && event.location.longitude) {
                L.marker([event.location.latitude, event.location.longitude]).addTo(map)
                    .bindPopup(`<b>${event.title}</b><br>${event.date}`);
            }
        });
    });
});