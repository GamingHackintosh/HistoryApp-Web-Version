import React, { useRef, useState } from 'react';
import './Gallery.scss';

const GallerySection = () => {
  const collageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  // Функция для вычисления прокрутки
  const scrollAmount = () => {
    const photoWidth = document.querySelector('.collage-photo').offsetWidth;
    return photoWidth;
  };

  // Обработчик для кнопки прокрутки влево
  const scrollLeft = () => {
    if (collageRef.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(newIndex);
      collageRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: 'smooth',
      });
    }
  };

  // Обработчик для кнопки прокрутки вправо
  const scrollRight = () => {
    if (collageRef.current) {
      const newIndex = Math.min(activeIndex + 1, 7);
      setActiveIndex(newIndex);
      collageRef.current.scrollBy({
        left: scrollAmount(),
        behavior: 'smooth',
      });
    }
  };

  // Dot navigation handler
  const handleDotClick = (index) => {
    setActiveIndex(index);
    collageRef.current.scrollTo({
      left: scrollAmount() * index,
      behavior: 'smooth',
    });
  };

  return (
    <section className="gallery container section" id="gallery">
      <h2>Историческая галерея</h2>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="collage" ref={collageRef}>
            {/* Render your images here */}
            <div className={`collage-photo photo-1 ${activeIndex === 0 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Основание Москвы</h3>
                <p>Москва была впервые упомянута в летописях в 1147 году, что считается годом её основания.</p>
              </div>
            </div>
            <div className={`collage-photo photo-2 ${activeIndex === 1 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Куликовская битва</h3>
                <p>Битва на Куликовом поле 8 сентября 1380 года стала ключевым моментом в истории Руси, знаменуя собой начало конца монгольского владычества.</p>
              </div>
            </div>
            <div className={`collage-photo photo-3 ${activeIndex === 2 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Восстание Декабристов</h3>
                <p>Восстание, организованное русскими аристократами-либералами в декабре 1825 года, было направлено против автократии и крепостничества.</p>
              </div>
            </div>
            <div className={`collage-photo photo-4 ${activeIndex === 3 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Пандемия COVID-19</h3>
                <p>В 2019 году началась пандемия из-за вируса SARS-CoV-2. Первые случаи были зарегистрированы в Ухане, Китай.</p>
              </div>
            </div>
            {/* Other slides */}
            <div className={`collage-photo photo-5 ${activeIndex === 4 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Великая Октябрьская Социалистическая Революция</h3>
                <p>Революция, которая привела к установлению Советской власти в России в 1917 году.</p>
              </div>
            </div>
            <div className={`collage-photo photo-6 ${activeIndex === 5 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Полёт Юрия Гагарина</h3>
                <p>12 апреля 1961 года Юрий Гагарин стал первым человеком, совершившим полёт в космос.</p>
              </div>
            </div>
            <div className={`collage-photo photo-7 ${activeIndex === 6 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Распад СССР</h3>
                <p>8 декабря 1991 года СССР официально прекратил своё существование.</p>
              </div>
            </div>
            <div className={`collage-photo photo-8 ${activeIndex === 7 ? 'active' : 'blur'}`}>
              <div className="photo-description">
                <h3>Вторая мировая война</h3>
                <p>Великая Отечественная война 1941-1945 годов - ключевой момент в истории России и всего мира.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-controls">
          <button className="scroll-left" onClick={scrollLeft}>❮</button>
          <button className="scroll-right" onClick={scrollRight}>❯</button>
        </div>

        {/* Dot Navigation */}
        <div className="dots-container">
          {[...Array(7 )].map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
