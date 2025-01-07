document.addEventListener("DOMContentLoaded", function() {
    // Your existing spark and line chart configurations...
    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();
    new ApexCharts(document.querySelector("#spark4"), spark4).render();
    new ApexCharts(document.querySelector("#line-adwords"), optionsLine).render();
});
