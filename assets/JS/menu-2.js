document.addEventListener('DOMContentLoaded', function() {
    const menu2Icon = document.getElementById('menu-2-icon');
    const sidebar2 = document.getElementById('sidebar-2');

    menu2Icon.addEventListener('click', function() {
        if (sidebar2.style.left === '0px') {
            sidebar2.style.left = '-200px';
        } else {
            sidebar2.style.left = '0px';
        }
    });
});
