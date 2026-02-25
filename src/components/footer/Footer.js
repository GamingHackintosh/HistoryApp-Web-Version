import React from 'react';
import './Footer.scss';

const Footer = ({ onLinkClick }) => {
  // Функция для обработки клика по ссылке в футере
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault(); // Предотвращаем стандартную навигацию по якорю
    onLinkClick(sectionId); // Вызываем функцию обработки навигации
  };

  return (
    <footer className="main-footer">
      {/* Логотип вверху */}
      <div className="footer-logo-container">
        <div className="footer-logo"></div>
      </div>
      
      <div className="footer-content">
        {/* Первый блок: Быстрые ссылки */}
        <div className="footer-section links-section">
          <h3>БЫСТРЫЕ ССЫЛКИ</h3>
          <ul className="footer-links">
            <li><a href="#GallerySection" onClick={(e) => handleLinkClick(e, 'GallerySection')}>Галерея</a></li>
            <li><a href="#SearchSection" onClick={(e) => handleLinkClick(e, 'SearchSection')}>Поиск</a></li>
            <li><a href="#PodcastsSection" onClick={(e) => handleLinkClick(e, 'PodcastsSection')}>Подкасты</a></li>
            <li><a href="#ArticlesSection" onClick={(e) => handleLinkClick(e, 'ArticlesSection')}>Статьи</a></li>
            <li><a href="#MapSection" onClick={(e) => handleLinkClick(e, 'MapSection')}>Интерактивная карта</a></li>
          </ul>
        </div>

        {/* Второй блок: Историческая цитата */}
        <div className="footer-section quote-section">
          <h3>ЦИТАТА</h3>
          <div className="quote-content">
            <div className="quote-text">
              <i className="fas fa-quote-left quote-icon"></i>
              <p>Вы хотите что-нибудь изменить? - боритесь за это! Боитесь выходить на улицу - пишите в интернете. Боитесь писать в интернете - на ухо своей жене рассказывайте, или любовнице, о том, как надо жить... Только что-нибудь делайте - каждый! Каждый, кто что может и чего не боится...</p>
              <i className="fas fa-quote-right quote-icon"></i>
            </div>
            <div className="quote-author">
              <span>— Борис Немцов</span>
            </div>
            <div className="quote-decoration">
              <div className="decoration-line"></div>
              <i className="fas fa-star decoration-icon"></i>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера с копирайтом и соцсетями */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          2024 Эхо Веков. Все права защищены.
        </div>
        <div className="footer-social">
          <a href="https://github.com/GamingHackintosh/HistoryApp-Web-Version" className="social-link" target="_blank" rel="noopener noreferrer">
            <div className="github-icon">
              <svg viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
