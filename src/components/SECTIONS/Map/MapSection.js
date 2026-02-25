import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "./MapSection.scss";

const MapSection = ({ isActive = false }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [events, setEvents] = useState([]);
  const markersRef = useRef([]);

  // Функция загрузки данных (используем useState и fetch)
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/assets/json/date.json")
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка загрузки JSON");
        return response.json();
      })
      .then((data) => {
        console.log("📍 Загруженные события:", data);
        setEvents(data);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []); // Загружаем только один раз при монтировании

  // Инициализация карты (запускается только один раз)
  useEffect(() => {
    if (!isActive || !mapRef.current) return;

    if (!mapInstance.current) {
      console.log("🗺️ Инициализация карты...");
      mapInstance.current = L.map(mapRef.current, {
        zoomAnimation: true, // Включаем анимацию зума
        zoomDelta: 0.25, // Делаем шаг зума меньше для большей плавности
        zoomSnap: 0.25, // Привязка зума к шагам в 0.25
        wheelDebounceTime: 40, // Уменьшаем задержку отклика на колесико мыши
        wheelPxPerZoomLevel: 60, // Настраиваем чувствительность колесика мыши
        fadeAnimation: true, // Включаем анимацию прозрачности тайлов
      }).setView(
        [55.751244, 37.618423], // Москва (по умолчанию)
        4
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
    }

    return () => {
      console.log("📌 Очистка карты...");
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [isActive]);

  // Добавление маркеров
  useEffect(() => {
    if (!isActive || !mapInstance.current || events.length === 0) return;

    console.log("📌 Добавление маркеров...");

    // Очистка старых маркеров перед добавлением новых
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    events.forEach((event) => {
      if (event.location?.latitude && event.location?.longitude) {
        const marker = L.marker([event.location.latitude, event.location.longitude])
          .addTo(mapInstance.current)
          .bindPopup(`<b>${event.title}</b><br>${event.date}<br><i>${event.location.city || ""}</i>`);

        markersRef.current.push(marker);
      }
    });
  }, [isActive, events]);

  return (
    <section className="map-section container section" id="map-section">
      <div className="container">
        <div className="map-title">
          <h2>Интерактивная карта исторических событий</h2>
          <p>Отметки на карте показывают важные исторические события России.</p>
        </div>
        <div className="map-container mobile">
          <div ref={mapRef} className="map" id="map" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
