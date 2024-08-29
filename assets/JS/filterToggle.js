document.addEventListener("DOMContentLoaded", function() {
    const filterWrapper = document.getElementById("century-filter-wrapper");
    const filter = document.getElementById("century-filter");

    filter.addEventListener("click", function() {
        filterWrapper.classList.toggle("open");
    });
});
