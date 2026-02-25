import React, { useState } from 'react';
import './Articles.scss';
import './keyframes.scss';
import './modal-window.scss';

import KulikovskayaBattle from '../../../assets/images/Events-Photo/KulikovskayaBattle.webp';
import GagarinFlight from '../../../assets/images/Events-Photo/Gagarinflight.jpg';
import BreakdownUSSR from '../../../assets/images/Events-Photo/BreakdownUSSR.jpg';
import GreatOctoberRevolution from '../../../assets/images/Events-Photo/GreatOctoberSocialistRevolution.jpg';


function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Куликовская битва: История и Влияние',
      description: 'Битва ознаменовала победу объединённых русских войск под предводительством великого князя Дмитрия Донского над монголо-татарским войском Мамая.',
      image: KulikovskayaBattle,
      content: `Куликовская битва, произошедшая в 1380 году, была одним из важнейших сражений в истории России. Это сражение окончательно утвердило лидерство великого князя Дмитрия Донского в борьбе с монголо-татарским игом. В ходе битвы объединённые русские войска победили армию Мамая, что положило начало процессу освобождения Руси от татаро-монгольского владычества.`,
    },
    {
      id: 2,
      title: 'Полёт Юрия Гагарина: Первые шаги в космосе',
      description: '12 апреля 1961 года Юрий Гагарин стал первым человеком, совершившим полёт в космос. Его полёт длился 108 минут.',
      image: GagarinFlight,
      content: `Полёт Юрия Гагарина стал знаковым событием не только для Советского Союза, но и для всего мира. Это был первый человек, который вышел за пределы земной атмосферы. Время его полёта составляло 108 минут, и за это время он сделал один оборот вокруг Земли. Полёт Гагарина не только стал достижением в космических исследованиях, но и символом победы советской науки в холодной войне.`,
    },
    {
      id: 3,
      title: 'Распад СССР: Причины и последствия',
      description: 'Распад Советского Союза в 1991 году стал результатом множества факторов, включая экономические проблемы и политическую нестабильность.',
      image: BreakdownUSSR,
      content: `Распад Советского Союза был одним из самых значимых событий в мировой истории XX века. Причины распада были многогранными: экономические проблемы, политическая нестабильность, национальные движения и влияние внешних факторов. В 1991 году СССР официально распался, и его место заняли 15 независимых государств. Это событие изменило политическую карту мира и повлияло на международные отношения.`,
    },
    {
      id: 4,
      title: 'Революция 1917 года: Причины и последствия',
      description: 'Великая Октябрьская Социалистическая Революция, произошедшая в октябре 1917 года, привела к свержению Временного правительства.',
      image: GreatOctoberRevolution,
      content: `Октябрьская революция 1917 года была кульминацией политического кризиса в России. Она привела к свержению Временного правительства и установлению власти большевиков под руководством Владимира Ленина. Революция не только кардинально изменила внутреннюю политику страны, но и оказала сильное влияние на мировую историю, став основой для создания Советского Союза`,
    },
  ];
  

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="articles container section" id="articles">
      <div className="container">
        <div className="article-title">
          <h2>Статьи</h2>
          <p>Статьи и обзоры исторических событий и личностей.</p>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <button className="open-modal" onClick={() => openArticle(article)}>Читать статью</button>
            </div>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-content-wrapper">

              <div className='modal-image'>
                <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
              </div>

              <div className="modal-text">
                <h2 className="modal-title">{selectedArticle.title}</h2>
                <p id="modal-description">{selectedArticle.description}</p>
                
                <div className="modal-scroll-content">
                  <p>{selectedArticle.content}</p>
                </div>
              </div>
            </div>

              {/* Кнопка закрытия */}
              <button className="close-modal-button" onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ArticlesSection;
