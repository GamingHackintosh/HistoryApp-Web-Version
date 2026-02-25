import React, { useState, useEffect } from 'react';
import './App.scss';

// Компоненты
import GitHubCorner from './components/GitHubCorners/GitHubCorner';
import Menu from './components/menu/menu';
import Header from './components/header/header';
import Navigation from './components/navigation/nav';
import Footer from './components/footer/Footer';
import FAQ from './components/FAQ/faq';
import Preloader from './components/Preloader/PreloaderScroll';

// Секции
import SearchSection from './components/SECTIONS/Search/SearchSection';
import GallerySection from './components/SECTIONS/Gallery/GallerySection';
import PodcastsSection from './components/SECTIONS/Podcast/PodcastsSection';
import ArticlesSection from './components/SECTIONS/Articles/ArticlesSection';
import MapSection from './components/SECTIONS/Map/MapSection';


function App() {
  const [activeSection, setActiveSection] = useState('GallerySection'); // Активная секция
  const [selectedCentury, setSelectedCentury] = useState(''); // Выбранный век
  const [showFAQ, setShowFAQ] = useState(false); // Состояние для FAQ (по умолчанию скрыто)
  const [isLoading, setIsLoading] = useState(true); // Состояние для прелоадера

  useEffect(() => {
    // Имитация загрузки сайта
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFAQOpen = () => {
    setShowFAQ(true); // Открыть FAQ при клике на ярлык
  };
  const handleFAQClose = () => {
    setShowFAQ(false); // Закрыть FAQ
  };

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId); // Выбор секции
  };

  const handleStartClick = () => {
    setActiveSection('GallerySection'); // Изначальная секция (Галерея)
  };

  // Обработчик для ссылок в футере
  const handleFooterLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      {/* Прелоадер */}
      {isLoading && <Preloader />}
      
      {showFAQ && <FAQ onClose={handleFAQClose} isVisible={showFAQ} />} {/* Передаем видимость модального окна */}

      <Menu onCenturySelect={setSelectedCentury} />

      
        <Header onStartClick={handleStartClick} />
        <Navigation handleNavigation={handleNavigation} />
        
        <main>
          <section id="SearchSection" className={`section ${activeSection === 'SearchSection' ? 'active' : ''}`}>
            <SearchSection selectedCentury={selectedCentury} />
          </section>

          <section id="GallerySection" className={`section ${activeSection === 'GallerySection' ? 'active' : ''}`}>
            <GallerySection />
          </section>

          <section id="PodcastsSection" className={`section ${activeSection === 'PodcastsSection' ? 'active' : ''}`}>
            <PodcastsSection />
          </section>

          <section id="ArticlesSection" className={`section ${activeSection === 'ArticlesSection' ? 'active' : ''}`}>
            <ArticlesSection />
          </section>

          <section id="MapSection" className={`section ${activeSection === 'MapSection' ? 'active' : ''}`}>
            <MapSection isActive={activeSection === 'MapSection'} />
          </section>
        </main>

        <Footer onLinkClick={handleFooterLinkClick} />

      <GitHubCorner />

      {/* Кнопка для открытия FAQ */}
      <button className="faq-btn" onClick={handleFAQOpen}>
        <i className="fas fa-question-circle"></i> {/* Используем иконку вопроса */}
      </button>
    </div>
  );
}

export default App;
