import React, { useState, useEffect, useCallback } from 'react';
import './Search.scss';
import './search-date';

const SearchSection = ({ onSearch, selectedCentury: propSelectedCentury }) => {
  const [eventsData, setEventsData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCentury, setSelectedCentury] = useState(propSelectedCentury || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [randomEvent, setRandomEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/assets/json/date.json")
      .then(response => response.json())
      .then(data => {
        setEventsData(data);
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage("Ошибка загрузки данных.");
        setLoading(false);
      });
  }, []);

  const handleSearch = useCallback((term = searchTerm, century = selectedCentury) => {
    if (!term.trim() && !century) {
      setErrorMessage("Поле поиска не может быть пустым.");
      setFilteredEvents([]);
      return;
    }

    const lowerSearch = term.trim().toLowerCase();
    
    const results = eventsData.filter(event => {
      const keywordsArray = event.keywords
        ? event.keywords.toLowerCase().split(',').map(word => word.trim())
        : [];

      const keywordMatch = lowerSearch
        ? keywordsArray.some(keyword => keyword.includes(lowerSearch))
        : true;

      const eventCenturies = event.century.split(',').map(c => c.trim());
      const centuryMatch = !century || eventCenturies.includes(century);

      return keywordMatch && centuryMatch;
    });

    if (results.length > 0) {
      setFilteredEvents(results);
      setErrorMessage('');
    } else {
      setFilteredEvents([]);
      setErrorMessage('Событий по данному запросу не найдено.');
    }

    if (onSearch) {
      onSearch(term, century);
    }
  }, [searchTerm, selectedCentury, eventsData, onSearch]);

  useEffect(() => {
    if (!loading && propSelectedCentury !== selectedCentury) {
      setSelectedCentury(propSelectedCentury || '');
      setRandomEvent(null); 
      handleSearch('', propSelectedCentury || ''); // Теперь поиск работает при выборе века
    }
  }, [propSelectedCentury, loading, handleSearch, selectedCentury]);

  const handleRandomEvent = () => {
    if (!eventsData || eventsData.length === 0) {
      setErrorMessage("Нет данных для выбора случайного события.");
      return;
    }

    setRandomEvent(eventsData[Math.floor(Math.random() * eventsData.length)]);
    setFilteredEvents([]);
  };

  return (
    <section className="search container section" id="search">
      <div className="form glass-panel">
        <article className="search-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="search"
              className="search-field"
              placeholder="Поиск событий..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" id="search-btn">
              Поиск
            </button>
          </form>

          <div id="century-filter-wrapper">
            <select
              id="century-filter"
              value={selectedCentury}
              onChange={(e) => {
                setSelectedCentury(e.target.value);
                setRandomEvent(null);
                handleSearch('', e.target.value);
              }}
            >
              <option value="">Все века</option>
              {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((century) => (
                <option key={century} value={`century-${century}`}>
                  {century} Век
                </option>
              ))}
              <option value="BeforeCentury">До нашей эры</option>
            </select>
          </div>
        </article>
      </div>

      <div className="message container">
        {errorMessage && <p id="error-message">{errorMessage}</p>}

        <div id="results" style={{ display: filteredEvents.length > 0 || randomEvent ? 'block' : 'none' }}>
          {randomEvent && (
            <div className="event random">
              <h3>{randomEvent.title || "Без названия"}</h3>
              <p><strong>Дата:</strong> {randomEvent.date || "Дата неизвестна"}</p>
            </div>
          )}

          {filteredEvents.map((event, index) => (
            <div key={index} className="event">
              <h3>{event.title}</h3>
              <p><strong>Дата:</strong> {event.date}</p>
            </div>
          ))}
        </div>

        <div className="random-event">
          <button
            onClick={handleRandomEvent}
            id="random-event-btn"
            disabled={loading || eventsData.length === 0}
          >
            {loading ? "Загрузка данных..." : "Случайное событие"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
