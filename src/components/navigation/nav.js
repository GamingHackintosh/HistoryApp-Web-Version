import React, { useState, useEffect, useRef, useCallback } from 'react';
import './nav.scss';

function Navigation({ handleNavigation }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const closeMenuIfClickedOutside = useCallback((event) => {
    if (!isMenuActive) return;

    if (
      navMenuRef.current &&
      menuToggleRef.current &&
      !navMenuRef.current.contains(event.target) &&
      !menuToggleRef.current.contains(event.target)
    ) {
      setIsMenuActive(false);
    }
  }, [isMenuActive]);

  useEffect(() => {
    document.addEventListener('click', closeMenuIfClickedOutside);
    return () => {
      document.removeEventListener('click', closeMenuIfClickedOutside);
    };
  }, [closeMenuIfClickedOutside]);

  // Функция для обработки клика по секции
  const handleSectionClick = (section) => {
    setActiveSection(section); // Устанавливаем активную секцию
    handleNavigation(section); // Вызываем функцию обработки навигации
  };

  return (
    <>
      {/* Кнопка для мобильного меню */}
      <button 
        ref={menuToggleRef} 
        className="mobile-menu-toggle" 
        id="mobile-menu-toggle" 
        onClick={toggleMobileMenu} 
        style={{ zIndex: isMenuActive ? 1001 : 1000 }}
      >
        Меню
      </button>

      {/* Навигация */}
      <nav 
        ref={navMenuRef}
        className={`navigation historical ${isMenuActive ? 'active' : ''}`} 
        id="nav-menu" 
      >
        <ul className="nav-list">
          <li>
            <a 
              href="#SearchSection" 
              onClick={() => handleSectionClick('SearchSection')}
              className={activeSection === 'SearchSection' ? 'active' : ''}
            >
              Поиск
            </a>
          </li>
          <li>
            <a 
              href="#GallerySection" 
              onClick={() => handleSectionClick('GallerySection')}
              className={activeSection === 'GallerySection' ? 'active' : ''}
            >
              Галерея
            </a>
          </li>
          <li>
            <a 
              href="#PodcastsSection" 
              onClick={() => handleSectionClick('PodcastsSection')}
              className={activeSection === 'PodcastsSection' ? 'active' : ''}
            >
              Подкасты
            </a>
          </li>
          <li>
            <a 
              href="#ArticlesSection" 
              onClick={() => handleSectionClick('ArticlesSection')}
              className={activeSection === 'ArticlesSection' ? 'active' : ''}
            >
              Статьи
            </a>
          </li>
          <li>
            <a 
              href="#MapSection" 
              onClick={() => handleSectionClick('MapSection')}
              className={activeSection === 'MapSection' ? 'active' : ''}
            >
              Интерактивная Карта
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
