document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".benefit-item, .plan");

    function showOnScroll() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("navbarLinks").classList.toggle("active");
});
