// Add animation to table rows
document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
        row.addEventListener("mouseover", function () {
            row.style.transform = "scale(1.02)";
            row.style.transition = "transform 0.3s ease";
        });

        row.addEventListener("mouseout", function () {
            row.style.transform = "scale(1)";
        });
    });
});
