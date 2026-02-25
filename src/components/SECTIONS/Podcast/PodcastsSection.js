import React from 'react';
import './Podcast.scss';


const PodcastsSection = () => (
  <section className="podcasts container section" id="podcasts">
    <div className="podcast-title">
      <h2>Подкасты</h2>
      <p>Подкасты о значимых исторических событиях России.</p>
    </div>
    <div className="podcast-list">
        <div className="podcast">
            <h3>Готовимся к ЕГЭ: История России</h3>
            <p>Подготовка к ЕГЭ по истории России. Рассматриваются ключевые события и даты, а также их значение и влияние на дальнейшее развитие страны.</p>
            <iframe 
              frameBorder={0} 
              allow="clipboard-write" 
              style={{border: 'none', width: '100%', height: 241}} 
              width="100%" 
              height={241} 
              src="https://music.yandex.ru/iframe/album/24342983" 
              title="Готовимся к ЕГЭ: История России - Подкаст"
            >
              Слушайте 
              <a href="https://music.yandex.ru/album/24342983">Готовимся к ЕГЭ. История России: События и даты</a> — 
              <a href="https://music.yandex.ru/artist/18047177">Кирсанов Сергей</a>
            </iframe>
        </div>
        <div className="podcast">
            <h3>История России с древнейших времен до наших дней.</h3>
            <p>Увлекательный подкаст, который охватывает ключевые события и эпохи в истории России, от зарождения древнерусского государства до современных дней.</p>
            <iframe 
              style={{borderRadius: 12}} 
              src="https://open.spotify.com/embed/album/5t9hCItEdQa27M47H9PnEI?utm_source=generator&theme=0" 
              width="100%" 
              height={400} 
              frameBorder={0} 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy" 
              title="История России с древнейших времен до наших дней - Подкаст"
            >
            </iframe>
        </div>
    </div>
  </section>
);

export default PodcastsSection;
