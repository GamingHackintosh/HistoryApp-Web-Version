import React from 'react';
import './faq.scss';

const FAQ = ({ onClose, isVisible }) => {
  return (
    <div className={`faq-overlay ${isVisible ? 'novisible' : ''}`}>
      <div className="faq-modal">
        <div className="faq-header">
          <h2>Добро пожаловать в Эхо Веков!</h2>
          <button className="faq-close-btn" onClick={onClose}>Закрыть</button>
        </div>
        <div className="faq-body">
          <p><strong>О сайте:</strong> Это веб-приложение предназначено для поиска и изучения значимых исторических событий России.</p>
          <p><strong>Как использовать:</strong></p>
          <ul>
            <li>Перейдите в раздел «Галерея», чтобы посмотреть изображения исторических событий.</li>
            <li>Используйте поисковую строку, чтобы искать события по векам.</li>
            <li>Вы можете прослушать подкасты или прочитать статьи по теме в соответствующих разделах.</li>
            <li>В разделе «Интерактивная карта» вы найдете места, связанные с историческими событиями.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};



export default FAQ;
