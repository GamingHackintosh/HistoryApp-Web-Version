document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', () => {
        const windowWidth = window.innerWidth;
        const isMobile = windowWidth <= 768; // Условие для мобильных устройств
        const sidebarWidth = isMobile ? '300px' : '370px'; // Ширина сайдбара на мобильных устройствах и на десктопе
        const iconLeft = isMobile ? '260px' : '330px'; // Расстояние для кнопки на мобильных устройствах и на десктопе

        if (sidebar.style.left === '0px') {
            sidebar.style.left = `-${sidebarWidth}`;
            menuIcon.style.left = '0';
        } else {
            sidebar.style.left = '0';
            menuIcon.style.left = sidebarWidth;
        }

        menuIcon.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});
