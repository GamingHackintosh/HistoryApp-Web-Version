document.addEventListener("DOMContentLoaded", function () {
    function setupFilter() {
        const filterWrapper = document.getElementById("century-filter-wrapper");
        const filter = document.getElementById("century-filter");

        if (!filter || !filterWrapper) {
            console.warn("Фильтр не найден. Ждём загрузки...");
            setTimeout(setupFilter, 500); // Ждём появления в DOM
            return;
        }

        filter.addEventListener("click", function () {
            filterWrapper.classList.toggle("open");
        });

        console.log("Фильтр подключён.");
    }

    setupFilter();
});
