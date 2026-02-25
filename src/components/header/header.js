import React, { useEffect, useRef } from 'react';
import './header.scss';

const Header = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;

    if (title && description) {
      title.classList.add('fade-in-glow');
      description.classList.add('slide-up');
    }
  }, []);

  return (
    <header className="main-header ornate-frame">
      <div className="header-content">
        <div className="header-logo framed-logo">
          <div className="logo-circle"></div>
        </div>
        <div className="header-text">
          <div className="header-title glow-title" ref={titleRef}>
            <span className="title-accent">Эхо</span> веков
          </div>
          <div className="header-description" ref={descriptionRef}>
            <p>Данное веб-приложение предназначено для поиска и изучения значимых исторических событий России.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
