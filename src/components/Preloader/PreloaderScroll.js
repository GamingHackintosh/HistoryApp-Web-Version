import React, { useEffect, useState } from 'react';
import './PreloaderScroll.scss';

const PreloaderScroll = () => {
  const [visible, setVisible] = useState(true);
  const displayTime = 5000; // Время отображения прелоадера - строго 5 секунд

  useEffect(() => {
    // Простой таймер на 5 секунд, без зависимости от загрузки страницы
    const timer = setTimeout(() => {
      setVisible(false);
    }, displayTime);

    // Очистка таймера при размонтировании компонента
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-scroll ${visible ? 'visible' : 'hidden'}`}>
      <div className="preloader-content">
        <div className="scroll-container">
          <div className="scroll">
            <div className="scroll-top"></div>
            <div className="scroll-paper">
              <div className="scroll-text">
                <div className="ink-line line1"></div>
                <div className="ink-line line2"></div>
                <div className="ink-line line3"></div>
                <div className="ink-line line4"></div>
              </div>
            </div>
            <div className="scroll-bottom"></div>
          </div>
        </div>
        <div className="preloader-title">
          <span className="title-accent">Эхо</span> веков
        </div>
        <div className="preloader-text">Разворачиваем свиток истории...</div>
      </div>
    </div>
  );
};

export default PreloaderScroll; 