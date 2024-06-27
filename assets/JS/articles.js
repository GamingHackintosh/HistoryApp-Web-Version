document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');
    const openModalButtons = document.querySelectorAll('.open-modal');

    // Данные статей
    const articles = {
        1: {
            image: 'assets/photo/Events-Photo/KulikovskayaBattle.webp',
            title: 'Куликовская битва: История и Влияние',
            description: 'Битва ознаменовала победу объединённых русских войск под предводительством великого князя Дмитрия Донского над монголо-татарским войском Мамая. Это событие укрепило русский дух и стало символом борьбы за независимость.'
        },
        2: {
            image: 'assets/photo/Events-Photo/Gagarinflight.jpg',
            title: 'Полёт Юрия Гагарина: Первые шаги в космосе',
            description: '12 апреля 1961 года Юрий Гагарин стал первым человеком, совершившим полёт в космос. Его полёт длился 108 минут и открыл новую эру в исследовании космоса. Гагарин стал национальным героем и символом достижений советской науки и технологий.'
        },
        3: {
            image: 'assets/photo/Events-Photo/BreakdownUSSR.jpg',
            title: 'Распад СССР: Причины и последствия',
            description: 'Распад Советского Союза в 1991 году стал результатом множества факторов, включая экономические проблемы, политическую нестабильность и национальные противоречия. Это событие изменило политическую карту мира и привело к появлению новых независимых государств на постсоветском пространстве.'
        },
        4: {
            image: 'assets/photo/Events-Photo/GreatOctoberSocialistRevolution.jpg',
            title: 'Революция 1917 года: Причины и последствия',
            description: 'Великая Октябрьская Социалистическая Революция, произошедшая в октябре 1917 года, привела к свержению Временного правительства и установлению власти Советов. Это событие ознаменовало начало новой эры в истории России и имело далеко идущие последствия как для страны, так и для всего мира.'
        }
    };

    // Открытие модального окна
    document.querySelectorAll('.open-modal').forEach(function (button) {
        button.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            modalDescription.innerHTML = `
                <div class="modal-content-wrapper">
                    <img src="${articles[articleId].image}" alt="${articles[articleId].title}" class="modal-image">
                    <div class="modal-text">
                        <h2 class="modal-title">${articles[articleId].title}</h2>
                        <div id="modal-description">${articles[articleId].description}</div>
                    </div>
                </div>`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});
