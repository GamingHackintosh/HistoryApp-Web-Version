document.getElementById('menu-icon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-370px';
        this.style.left = '0';
    } else {
        sidebar.style.left = '0';
        this.style.left = '370px';
    }
});

